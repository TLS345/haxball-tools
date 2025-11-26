// By TLS / Teleese
// Day 45-60

import fs from "fs";
import path from "path";
import puppeteerExtra from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import express from "express";
import { Client, GatewayIntentBits, Partials, EmbedBuilder } from "discord.js";

const URL = "https://www.haxball.com/headlesstoken";
const MAX_RESPONSE_WAIT = 120000;
const EXT_PATH = path.resolve(process.cwd(), "extension"); 
const DEFAULT_INSTANCES = 1;
const arg = process.argv[2];
const INSTANCES = arg && !isNaN(Number(arg)) ? Math.max(1, Number(arg)) : DEFAULT_INSTANCES;
const DISCORD_PREFIX = "!";
const DISCORD_COMMAND = "token";
const DISCORD_STATUS = "status";

const HEADLESS = process.env.HEADLESS === "1" || process.env.HEADLESS === "true";
const CHROME_EXECUTABLE_PATH = process.env.CHROME_EXECUTABLE_PATH || null;

const MAX_GENERATORS = Number(process.env.MAX_GENERATORS) || 1; 
const MIN_TOKENS = Number(process.env.MIN_TOKENS) || 2;       
const GENERATOR_TIMEOUT = Number(process.env.GENERATOR_TIMEOUT) || 90_000;

if (!fs.existsSync(EXT_PATH)) {
  console.error("Extension folder not found at:", EXT_PATH);
  console.error("Make sure it exists and contains manifest.json");
  process.exit(2);
}

const tokens = [];

function extractTokenFromText(txt) {
  if (!txt) return null;
  try {
    const parsed = JSON.parse(txt);
    if (parsed?.token) return parsed.token;
  } catch {}
  const m = txt.match(/(thr1\.[A-Za-z0-9\-_\.]+)/);
  if (m) return m[1];
  if (txt.length > 120 && /[A-Za-z0-9\-_\.]/.test(txt)) return txt.trim();
  return null;
}

puppeteerExtra.use(StealthPlugin());

async function runInstance(index) {
  const launchOptions = {
    headless: HEADLESS,
    defaultViewport: null,
    args: [
      `--disable-extensions-except=${EXT_PATH}`,
      `--load-extension=${EXT_PATH}`,
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      "--window-size=1366,768"
    ]
  };
  if (!HEADLESS) launchOptions.args.push("--start-maximized");
  if (CHROME_EXECUTABLE_PATH) launchOptions.executablePath = CHROME_EXECUTABLE_PATH;

  let browser;
  try {
    browser = await puppeteerExtra.launch(launchOptions);
  } catch (err) {
    console.error(`[${index}] Launch error:`, err.message || err);
    return { index, ok: false, reason: "launch_failed" };
  }

  try {
    const pages = await browser.pages();
    const page = pages[0] ?? await browser.newPage();

    try {
      const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116 Safari/537.36";
      await page.setUserAgent(ua);
    } catch {}

    await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

    let saved = false;

    page.on("response", async (resp) => {
      try {
        if (saved) return;
        const u = resp.url() || "";
        if (u.includes("/rs/api/getheadlesstoken") || u.toLowerCase().includes("headlesstoken") || u.includes("/api/")) {
          const txt = await resp.text().catch(() => "");
          const token = extractTokenFromText(txt);
          if (token) {
            tokens.push(token);
            console.log(`[${index}] ✅ Token captured via XHR — total in memory: ${tokens.length}`);
            saved = true;
            try { await browser.close(); } catch {}
          }
        }
      } catch {}
    });

    const tryFindTokenInDOM = async () => {
      try {
        const token = await page.evaluate(() => {
          const candidates = [...document.querySelectorAll("#token, .token, code, pre, body, input, textarea")];
          for (const el of candidates) {
            const t = (el.value || el.innerText || el.textContent || "").trim();
            const m = t.match(/(thr1\.[A-Za-z0-9\-_\.]+)/);
            if (m) return m[1];
            if (t.length > 120 && /[A-Za-z0-9\-_\.]/.test(t)) return t;
          }
          return null;
        });
        return token;
      } catch {
        return null;
      }
    };

    await page.waitForFunction(() => {
      try {
        if (window.grecaptcha?.getResponse?.()?.length > 0) return true;
        if (window.hcaptcha?.getResponse?.()?.length > 0) return true;
        const inputs = Array.from(document.querySelectorAll("input, textarea"));
        for (const i of inputs) {
          const v = (i.value || "").trim();
          if (/(thr1\.[A-Za-z0-9\-_\.]+)/.test(v) || v.length > 120) return true;
        }
        return false;
      } catch { return false; }
    }, { timeout: MAX_RESPONSE_WAIT, polling: 1000 });

    await page.evaluate(() => {
      const selectors = [
        'button[type="submit"]', 'input[type="submit"]',
        'button[id*="submit"]', 'button[class*="submit"]',
        'input[id*="submit"]', 'input[class*="submit"]'
      ];
      for (const s of selectors) {
        const el = document.querySelector(s);
        if (el) { try { el.click(); } catch {} ; return; }
      }
      const textButtons = Array.from(document.querySelectorAll("button, input[type=button], a"));
      for (const b of textButtons) {
        const txt = (b.innerText || b.value || "").trim().toLowerCase();
        if (!txt) continue;
        if (txt.match(/submit|send|get token|generate|continue/)) {
          try { b.click(); } catch {}
          return;
        }
      }
      const forms = document.querySelectorAll("form");
      if (forms.length) try { forms[0].submit(); } catch {}
    });

    console.log(`[${index}] Interaction/captcha detected. Waiting for XHR or DOM...`);

    await new Promise(r => setTimeout(r, 3000));
    if (!saved) {
      const token = await tryFindTokenInDOM();
      if (token) {
        tokens.push(token);
        console.log(`[${index}] ✅ Token extracted from DOM — total: ${tokens.length}`);
        saved = true;
        try { await browser.close(); } catch {}
      }
    }

    if (!saved) {
      const token = await tryFindTokenInDOM();
      if (token) {
        tokens.push(token);
        console.log(`[${index}] ✅ Token extracted from DOM (final attempt) — total: ${tokens.length}`);
        saved = true;
      }
    }

    try { await browser.close(); } catch {}
    return { index, ok: saved };
  } catch (e) {
    console.error(`[${index}] Instance error:`, e.message || e);
    try { await browser.close(); } catch {}
    return { index, ok: false, reason: "runtime_error" };
  }
}

async function startPuppeteerInstances(count = INSTANCES) {
  console.log(`Launching ${count} instances (prefill). HEADLESS=${HEADLESS}`);
  const tasks = [];
  for (let i = 1; i <= count; i++) {
    tasks.push(runInstance(i));
    await new Promise(r => setTimeout(r, 3000));
  }
  const results = await Promise.all(tasks);
  const okCount = results.filter(r => r.ok).length;
  console.log(`Instances done. Tokens captured: ${okCount}/${count} (in memory: ${tokens.length})`);
}

let activeGenerators = 0;
let generatorCounter = 0;

async function ensureTokens(desired = 1, timeout = GENERATOR_TIMEOUT) {
  const start = Date.now();
  if (tokens.length >= desired) return true;

  while (tokens.length < desired && (Date.now() - start) < timeout) {
    if (activeGenerators < MAX_GENERATORS) {
      activeGenerators++;
      generatorCounter++;
      runInstance(generatorCounter)
        .catch(err => console.error(`[gen ${generatorCounter}] error:`, err))
        .finally(() => {
          activeGenerators = Math.max(0, activeGenerators - 1);
        });
      await new Promise(r => setTimeout(r, 700));
    } else {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  return tokens.length >= desired;
}

function startRefiller() {
  (async () => {
    while (true) {
      try {
        if (tokens.length < MIN_TOKENS && activeGenerators < MAX_GENERATORS) {
          const need = Math.max(1, MIN_TOKENS - tokens.length);
          console.log(`[REFILL] Low stock (${tokens.length}). Generating ${need} tokens...`);
          ensureTokens(need, 60_000).then(ok => {
            if (ok) console.log(`[REFILL] New stock: ${tokens.length}`);
            else console.log("[REFILL] Timeout — no tokens generated.");
          });
        }
      } catch (e) {
        console.error("[REFILL] Error:", e);
      }
      await new Promise(r => setTimeout(r, 10_000));
    }
  })();
}

async function startDiscordBot() {
  const tokenBot = process.env.DISCORD_TOKEN;
  if (!tokenBot) {
    console.warn("No DISCORD_TOKEN found. Discord bot not initialized.");
    return;
  }

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel]
  });

  const userCooldown = new Map();
  const COOLDOWN_MS = 10_000;

  client.on("ready", () => {
    console.log(`Discord bot ready as ${client.user.tag}`);
  });

  client.on("messageCreate", async (msg) => {
    try {
      if (msg.author.bot) return;
      if (!msg.content.startsWith(DISCORD_PREFIX)) return;
      const body = msg.content.slice(DISCORD_PREFIX.length).trim();
      const cmd = body.split(/\s+/)[0].toLowerCase();

      if (cmd === DISCORD_COMMAND) {
        const last = userCooldown.get(msg.author.id) || 0;
        if (Date.now() - last < COOLDOWN_MS) {
          await msg.reply("Please wait a few seconds before requesting another token.");
          return;
        }
        userCooldown.set(msg.author.id, Date.now());

        if (tokens.length > 0) {
          const t = tokens.shift();
          const embed = new EmbedBuilder()
            .setTitle("Here’s your token")
            .setDescription("Use this token responsibly. It expires quickly (~2 min).")
            .addFields({ name: "Token", value: `\`${t}\`` })
            .setColor(0x00AE86)
            .setFooter({ text: `${tokens.length} tokens left in stock` })
            .setTimestamp();
          try {
            await msg.author.send({ embeds: [embed] });
            await msg.reply("Token sent via DM.");
          } catch {
            await msg.reply({ content: `Couldn't send DM. Here’s your token:\n\`${t}\`` });
          }
          if (tokens.length < MIN_TOKENS) ensureTokens(MIN_TOKENS).catch(()=>{});
          return;
        }

        await msg.reply("No tokens available. Generating one (this may take up to 60s)...");
        const ok = await ensureTokens(1, 60_000);
        if (ok && tokens.length > 0) {
          const t = tokens.shift();
          const embed = new EmbedBuilder()
            .setTitle("Freshly generated token")
            .setDescription("Use responsibly. Expires fast (~2 min).")
            .addFields({ name: "Token", value: `\`${t}\`` })
            .setColor(0xFFD700)
            .setFooter({ text: `${tokens.length} tokens left in stock` })
            .setTimestamp();
          try {
            await msg.author.send({ embeds: [embed] });
            await msg.reply("Token generated and sent via DM.");
          } catch {
            await msg.reply({ content: `Couldn't send DM. Here’s your token:\n\`${t}\`` });
          }
          if (tokens.length < MIN_TOKENS) ensureTokens(MIN_TOKENS).catch(()=>{});
        } else {
          await msg.reply("Failed to generate token in time. Try again later.");
        }
      }

      if (cmd === DISCORD_STATUS) {
        const embed = new EmbedBuilder()
          .setTitle("Token Bot Status")
          .addFields(
            { name: "Tokens in memory", value: `${tokens.length}`, inline: true },
            { name: "Active generators", value: `${activeGenerators}`, inline: true },
            { name: "Max generators", value: `${MAX_GENERATORS}`, inline: true },
            { name: "Min tokens desired", value: `${MIN_TOKENS}`, inline: true }
          )
          .setColor(0x3498db)
          .setTimestamp();
        await msg.reply({ embeds: [embed] });
      }

    } catch (e) {
      console.error("Discord message handler error:", e);
    }
  });

  await client.login(tokenBot);
}

function startHttpServer() {
  const app = express();
  app.get("/status", (req, res) => {
    res.json({
      ok: true,
      tokens: tokens.length,
      activeGenerators,
      maxGenerators: MAX_GENERATORS,
      minTokens: MIN_TOKENS
    });
  });
  const port = Number(process.env.STATUS_PORT) || 3000;
  app.listen(port, () => {
    console.log(`[HTTP] Status server at http://localhost:${port}/status`);
  });
}

(async () => {
  startHttpServer();
  startDiscordBot().catch(err => console.error("Discord bot error:", err));
  startRefiller();
  const prefillCount = Math.min(MIN_TOKENS, Math.max(1, INSTANCES));
  if (prefillCount > 0) {
    await startPuppeteerInstances(prefillCount);
  }
  console.log("Main process running. Discord bot (if active) remains online.");
})();

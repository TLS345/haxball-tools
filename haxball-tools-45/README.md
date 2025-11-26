# Recaptcha Token Harvester

Lightweight Puppeteer-based reCAPTCHA token harvester: launches Chromium, uses stealth and network/DOM heuristics to capture solved reCAPTCHA/headless tokens, stores and serves them (Discord, HTTP, local files), includes auto-refill and status endpoint.  
For testing on sites you own — **do not abuse**.

---

## 📦 Overview

This script (`bot.js`) opens a Chromium browser to `https://www.haxball.com/headlesstoken`, detects and extracts valid tokens, and delivers them to consumers through Discord, local storage, or an HTTP status endpoint.  
It maintains a configurable token stock and supports on-demand generation when tokens are requested.

---

## ⚙️ Features

- **Stealth mode** with `puppeteer-extra-plugin-stealth`.
- **Auto-refill worker** keeps minimum token stock (`MIN_TOKENS`).
- **On-demand generation** when none are available.
- **Discord bot integration** (`!token`, `!status`).
- **HTTP status endpoint** (`GET /status`).
- **Configurable limits** for low-RAM environments.
- **Visible/headless modes** (visible recommended for captchas).

---

## 🧩 Requirements

- Node.js **v16+** (tested on v18+)
- Installed Chrome/Chromium (Puppeteer downloads one by default)
- Dependencies:
```bash
  npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth discord.js@14 express
 ````

* Folder with unpacked Chrome extension (`extension`) containing `manifest.json`

---

## ⚡ Quick Start

```bash
git clone https://github.com/TLS345/haxball-tools-45
cd recaptcha-harvester
npm install
set "DISCORD_TOKEN=YOUR_DISCORD_TOKEN"
node bot-token-haxball-stealth.refill.js 1
```

> Visible mode is default and more reliable.
> On low-RAM systems (4GB), use `MAX_GENERATORS=1` and `MIN_TOKENS=1`.

---

## ⚙️ Environment Variables

| Variable         | Description                         | Default |
| ---------------- | ----------------------------------- | ------- |
| `DISCORD_TOKEN`  | Discord bot token (optional)        | —       |
| `HEADLESS`       | `1` to run headless, else visible   | visible |
| `MAX_GENERATORS` | Max simultaneous Chromium instances | 1       |
| `MIN_TOKENS`     | Min tokens to keep in memory        | 2       |
| `STATUS_PORT`    | Port for HTTP status server         | 3000    |

---

## 💬 Discord Commands

| Command   | Description                                         |
| --------- | --------------------------------------------------- |
| `!token`  | Sends a token via DM or inline if DMs are disabled. |
| `!status` | Displays tokens in memory and generator status.     |

Tokens are short-lived (~2 minutes) and domain-bound.
Cooldowns prevent spam; consider adding role checks for production.

---

## 🌐 HTTP Status Endpoint

Default endpoint:
`http://localhost:3000/status`

Example response:

```json
{
  "ok": true,
  "tokens": 2,
  "activeGenerators": 0,
  "maxGenerators": 1,
  "minTokens": 2
}
```

---

## 🧠 How It Works

1. Opens `https://www.haxball.com/headlesstoken`.
2. Monitors **XHR responses** and **DOM** for tokens (`thr1.*`).
3. Extracts and stores tokens in a memory queue.
4. Refiller ensures `MIN_TOKENS` tokens remain available.
5. Discord or HTTP consumers retrieve tokens on demand.

---

## 🧩 Example Windows `.bat`

```bat
@echo off
cd /d "%~dp0"
set "DISCORD_TOKEN=YOUR_TOKEN_HERE"
set "MAX_GENERATORS=1"
set "MIN_TOKENS=2"
node bot-token-haxball-stealth.refill.js 1
pause
```

---

## 🛠 Troubleshooting

* **No tokens captured:** Run in visible mode; check `extension/manifest.json` exists.
* **Discord bot not responding:** Verify `DISCORD_TOKEN` and `Message Content` intent in Discord Developer Portal.
* **High RAM usage:** Lower `MAX_GENERATORS` and `MIN_TOKENS`.
* **Headless fails:** Many captchas require rendering — run visible.

---

## 🧑‍💻 Contributing

Pull requests are welcome for improvements, modular token extraction, or performance tuning.
**Do not** submit features intended for third-party abuse.


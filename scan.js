// By TLS/Teleese
// Day 56-365

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import readline from 'readline';

puppeteer.use(StealthPlugin());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askRoomLink() {
    return new Promise(resolve => {
        rl.question("Haxball Room Link: ", answer => {
            resolve(answer.trim());
        });
    });
}

async function main(HAXBALL_ROOM_URL) {
    console.log("\n⏳ Launching headless engine...\n");

    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-features=WebRtcHideLocalIpsWithMdns',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled'
        ]
    });

    const page = await browser.newPage();
    const logs = [];
    const remoteIPs = new Set();
    let closed = false;

    async function safeClose() {
        if (closed) return;
        closed = true;
        fs.writeFileSync('webrtc-log.json', JSON.stringify(logs, null, 2));
        try { await browser.close(); } catch(e){}
        process.exit(0);
    }

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    await page.evaluateOnNewDocument(() => {
        Intl.DateTimeFormat = class extends Intl.DateTimeFormat {
            constructor(locale, opts) { super(['en-US'], opts); }
        };
        Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
        const getParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(param) {
            if (param === 37445 || param === 37446) return "Intel Inc.";
            return getParameter.call(this, param);
        };
    });

    await page.exposeFunction("onCandidateCaptured", (candidate) => {
        logs.push({ type: "remote-candidate", candidate, time: Date.now() });
        const match = candidate.match(/(\d{1,3}(?:\.\d{1,3}){3})/);
        if (match) {
            const ip = match[1];
            if (!remoteIPs.has(ip)) {
                remoteIPs.add(ip);
            }
        }
    });

    await page.evaluateOnNewDocument(() => {
        const OriginalPC = window.RTCPeerConnection;
        window.RTCPeerConnection = function(...args) {
            const pc = new OriginalPC(...args);
            const oldAdd = pc.addIceCandidate;
            pc.addIceCandidate = function(candidate, ...rest) {
                if (candidate?.candidate) window.onCandidateCaptured(candidate.candidate);
                return oldAdd.apply(this, [candidate, ...rest]);
            };
            return pc;
        };
    });

    await page.goto(HAXBALL_ROOM_URL, { waitUntil: 'networkidle2' });

    const iframeElement = await page.$('iframe');
    const frame = await iframeElement?.contentFrame();

    if (!frame) {
        console.log("❌ Room closed or unavailable.");
        return safeClose();
    }

    const nickSelector = 'input[data-hook="input"][maxlength="25"]';
    await frame.waitForSelector(nickSelector, {timeout:10000});
    const input = await frame.$(nickSelector);

    await input.click();
    await input.type("Scanner");
    await input.press("Enter");

    console.log("⏳ Sniffing WebRTC candidates...\n");

    setTimeout(() => {
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("        RESULT TABLE");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");

        if (remoteIPs.size === 0) {
            console.log("❌ No IP found. Room may be empty, full, or protected.");
        } else {
            [...remoteIPs].forEach((ip, i) => {
                console.log(`[#${i+1}] ${ip}`);
            });
        }

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
        safeClose();
    }, 7000);
}

async function init() {
    const HAXBALL_ROOM_URL = await askRoomLink();
    rl.close();

    if (!HAXBALL_ROOM_URL.startsWith("http")) {
        console.log("❌ Invalid link.");
        process.exit(1);
    }

    main(HAXBALL_ROOM_URL);
}

init();

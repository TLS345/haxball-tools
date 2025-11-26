# ⚡ Haxball WebRTC Room IP Scanner

A fast, invisible and fully automated WebRTC-based IP sniffer built specifically for **Haxball rooms**.  
It extracts the host's real IP address without joining the match, without being visible, and without leaving any trace.

Perfect for automation services, dashboards, monitoring tools, security research, and high-volume bot systems.

---

## 🚀 Features

- 🔎 **Instant WebRTC IP Discovery**  
  Captures remote ICE candidates from the Haxball room and extracts valid IPs.

- 🕶️ **Invisible Headless Mode**  
  Loads the room silently without appearing as a player.

- ⚡ **Optimized for Speed**  
  Full scan in ~5–7 seconds with near-zero resource usage.

- 🔐 **Safe & Passive**  
  Does not interact with the room, doesn’t join teams, doesn’t reveal itself.

- 🌍 **Fully Stealth**  
  Includes anti-fingerprinting, timezone spoofing, WebGL spoof, language masking and more.

- 🧩 **API-Ready**  
  Can be integrated into Express or any backend service.

---

## 📦 Installation

Make sure Node.js 18+ is installed.

```bash
npm install
````

If your environment requires Puppeteer manually:

```bash
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
```

---

## ▶️ Usage

Run the scanner:

```bash
node scan.js
```

You will be prompted:

```
Haxball Room Link:
```

Paste the room link:

```
https://www.haxball.com/play?c=XXXX
```

The result will be displayed in a clean formatted table.

---

## 🧠 How It Works

1. Launches a stealth headless Chromium instance
2. Loads the Haxball page without joining
3. Hooks WebRTC internals
4. Captures ICE candidates
5. Extracts all remote IPv4 addresses
6. Prints them in a clean, minimal table

No interaction, no detection, zero footprint.

---

## 📚 File Output

Raw candidate logs are saved in:

```
webrtc-log.json
```

This can be used for debugging or deeper analysis.

---

## 👤 Author

**Teleese / TLS**
Creator of advanced Haxball automation, bot systems, and networking tools.

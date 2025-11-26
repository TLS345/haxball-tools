# 🔥 HaxBall Interactive Chat Logger Bot  
### Automated Chat Capture • AI Auto-Replies • Event Tracking • JSON Analytics • Headless Puppeteer

This repository contains a **fully automated HaxBall bot** capable of joining any public or private room, monitoring everything in real time, and exporting clean, structured JSON logs.  
It is built using **Node.js**, **Puppeteer Extra**, **Stealth mode**, and **OpenRouter** for AI-driven interactions.

Designed for:
- Data collection & analytics  
- AI training datasets  
- Room monitoring  
- Player behavior analysis  
- HaxBall research & automation  

---

## ⚡ Key Features

### 🧠 AI-Powered Auto-Reply System
- Detects when the bot is mentioned: `@yourBotName`
- Sends context-aware replies using OpenRouter
- Maintains a rolling conversation context
- Safe fallback when the AI API is unavailable

### 💬 Full Chat Logging
- Captures messages in real time
- Detects both DOM chat updates and console/log updates
- Supports timestamps in multiple formats
- Captures system messages, join/leave, and team switches

### 📡 All Game Event Tracking
The bot monitors and records:
- Goals (red/blue)
- Player joins and leaves
- Kicks and bans
- Team changes
- Room announcements
- Game state changes

### 📊 Automatic Statistics Engine
Automatically generates:
- Total messages  
- Total events  
- Total AI responses  
- Unique users  
- Most active players  
- Goals scored  
- Kicks / bans count  
- Join/leave ratio  
- Chat activity timeline  

### 🖥️ DOM Mutation Capture
A high-frequency **MutationObserver** monitors:
- Chat DOM nodes  
- Player list  
- Scoreboard updates  
- System messages  
- Goal messages  
Useful for ML datasets that require raw DOM structure.

### 🎮 Anti-AFK Movement System
Simulates activity every few seconds to avoid AFK auto-kick:
- Small keyboard movement patterns  
- Human-like timing  
- Randomized intervals  

### 📂 JSON Log Export
At the end of every session (or on command), the bot saves:
```

haxball_log_<timestamp>.json

```
Including:
- Messages[]
- Events[]
- players_snapshot[]
- ai_responses[]
- domCaptures[]
- stats{}
- runtime metadata
- execution environment info

Perfect for:
- Machine learning  
- Replay analysis  
- Model training  
- Dataset building  

### 🧰 Interactive Terminal Commands
```

/quit      → exit and save
/stats     → show live statistics
/players   → show current players
/save      → save log without quitting
/context   → show AI conversation context

````

---

## 🛠️ Installation

```bash
git clone https://github.com/TLS345/haxball-tools-57
cd haxball-tools-57
npm install puppeteer-extra puppeteer-extra-plugin-stealth node-fetch dotenv
````

## 🔧 Configuration

Create a `.env` file:

```env
OPENROUTER_KEY=your_api_key_here
```

Bot usage (minimal):

```bash
node logger.js "<room_url>"
```

Full usage:

```bash
node logger.js "<room_url>" "<bot_name>" <duration_seconds> <output_dir>
```

Example:

```bash
node logger.js "https://www.haxball.com/play?c=ABCDE" "TrackerBot" 1800 "logs"
```

---

## 📁 Example Log Structure

```json
{
  "metadata": {
    "room_url": "...",
    "bot_name": "...",
    "start_time": "...",
    "end_time": "..."
  },
  "messages": [...],
  "events": [...],
  "players_snapshot": [...],
  "ai_responses": [...],
  "domCaptures": [...],
  "statistics": { ... }
}
```

---

## 🏗️ Technology Stack

* **Node.js**
* **Puppeteer Extra**
* **Stealth Plugin**
* **Headless Chrome Automation**
* **OpenRouter API**
* **MutationObserver DOM Scraping**
* **Interactive CLI**

---

## ⚠️ Notes & Limitations

* Headless behavior may depend on browser version
* AI responses require a valid OpenRouter token
* Long sessions generate large logs—use timestamps for organizing
* Best run on Linux for maximum stability

---

## 🤝 Contributing

Pull requests and improvements are welcome.
If you have ideas for analytics, dashboarding or ML integration, open an issue.

---

## ❤️ Credits

Developed with dedication by **TLS / Teleese**
---

Thanks Chatgpt for help me with the Readme Shit
---

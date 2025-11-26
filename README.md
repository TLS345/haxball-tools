# 🛡️ Haxball Anti-Multiaccount (Day 2/60)

Second day of the **60 days challengs** — building one tool per day for Haxball ⚽.  
This script blocks players who try to connect with **multiple accounts from the same IP**.  

✨ Made with love by **TLS / Teleese**  

---

## 🚀 Features
- Detects players connecting from the same IP
- Allows a maximum of **2 players per IP** (configurable)
- Auto-kick when the limit is exceeded
- Console logs with colored style 🖥️
- Commands to show stats and reset data

---

## ⚙️ Usage
1. Download the file `anti-multiaccount.js`  
2. Place it in your **Haxball headless host script**  
3. Adjust settings:
   ```js
   const MAX_PER_IP = 2; // max players allowed per IP
   const WHITELIST = ["AdminNick", "Teleese"]; // exempt nicks

# 🕹️ Haxball Anti-AFK — Day 7/60

Simple Anti-AFK system for Haxball.  
Detects inactive players and kicks them automatically after 1 minute of no movement or chat activity.

✨ By TLS / Teleese

---

## ⚡ Features

- Detects AFK players in real-time
- Kick automatically after 1 minute of inactivity
- Simple and lightweight script
- Easy to integrate into any Haxball room

---

## ⚙️ Installation

1. Clone or download this repo.
2. Include `anti-afk.js` in your Haxball room script or bot.
3. Done! The system will monitor activity and kick AFK players.

---

## 🧩 How it works

- Each player has a `lastActive` timestamp.
- Every few seconds the script checks if `currentTime - lastActive > AFK_LIMIT`.
- If a player exceeds the limit, they get kicked.
- Any movement or chat updates `lastActive`.

---

## 📢 Feedback & Updates

Open for suggestions!  
If you have an idea to improve this system, submit an issue or pull request.  

---

## 📜 License

Apache 2.0 — keep NOTICE and LICENSE intact.

**By TLS / Teleese — Day 8/365**

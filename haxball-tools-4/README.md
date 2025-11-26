# 🔐 Auto-Verify (Captcha-lite) – Day 4/60

Quick and lightweight captcha system for Haxball rooms.  
When a player looks suspicious, the script sends a short private code they must reply with in chat — if they don't, they're removed.

✨ By **TLS / Teleese**

---

## ⚡ Features
- Sends a short numeric code to suspicious players (private announcement).
- Player must reply with the code within **15s** (configurable) or gets kicked.
- Suspicion is decided by simple heuristics: short/weird names, many joins, many accounts from same IP.
- Whitelist for admins to skip verification.
- Console logs with `By TLS` branding.

---

## ⚙️ Config (top of `auto-verify.js`)
- `VERIFY_TIMEOUT` (ms) — how long player has to reply (default 15000)
- `CODE_LENGTH` — digits in code (default 4)
- `SUSPICION_RULES` — simple heuristics (minNameLength, weirdCharRatio, maxJoinsPerMinute, maxPerIP)
- `WHITELIST` — array of nicknames to skip verification

---

## 🧩 How it works
1. Player joins → script runs `isSuspicious()` heuristic.
2. If suspicious, it sends a private announcement with a code.
3. Player must reply in chat with the exact code within the timeout.
4. If correct → verified (message suppressed in public chat). If not → kicked.

---

## 🔧 Usage
1. Paste `auto-verify.js` into your Haxball host script.
2. Tune the config constants to your taste.
3. Run the room — watch console logs for events.

---

## 📜 License
Apache 2.0 — keep `NOTICE` and `LICENSE` files intact.

**By TLS / Teleese — Day 4/365**

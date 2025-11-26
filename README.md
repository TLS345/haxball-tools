# 🚫 Anti-Own Goals (Day 5/60)

This script automatically tracks **own goals** and kicks a player if they reach a limit.  
Default: **3 own goals = auto-kick**.

✨ By **TLS / Teleese**

---

## ⚡ Features
- Tracks each player's own goals.
- Shows warnings in chat (`⚠️`) after each own goal.
- Auto-kicks when reaching the configured limit.
- Resets counters at the end of the game or when the player leaves.

---

## ⚙️ Config
- `MAX_OWN_GOALS` → how many own goals allowed before kicking (default: 3)

---

## 🧩 How it works
1. Player scores an own goal → counter +1
2. Announcement shows progress (`⚠️ Name scored an own goal (1/3)`)
3. At the limit → player is kicked with reason.

---

## 📜 License
Apache 2.0 — keep `NOTICE` and `LICENSE` files intact.

**By TLS / Teleese — Day 5/60**

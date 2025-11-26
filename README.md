# ⚡ Haxball Slow Mode Script - Day 43 - 365

> A **Slow Mode system** for Haxball Headless Host scripts.  
> Keep your chat clean — stop spam before it starts 💬🚫

---

## ✨ Features
✅ **Toggle slow mode** — admins can enable or disable it anytime.  
⏳ **Custom cooldown** — set the cooldown in seconds.  
🛡️ **Admin immunity** — admins aren’t affected by slow mode.  
🚷 **Anti-spam filter** — blocks messages during cooldown.  
⚠️ **Smart warning system** — notifies players when they’re chatting too fast.

---

## 💬 Commands

| 🧩 Command | 📝 Description |
|:-----------|:---------------|
| `!slow` | Enables slow mode (default **2 seconds**). |
| `!slow [seconds]` | Enables slow mode with a custom cooldown. |
| `!endslow` | Disables slow mode instantly. |

---

## 🚀 Setup & Usage

1. **Copy** `slowmode.js` into your Haxball Headless script directory.  
2. **Import** or **paste** the code into your main file (`core.js`, `room.js`, etc).  
3. **Run** your room as usual — admins can now manage slow mode via commands.  

💡 Example:
```bash
!slow 5     # Activates slow mode (5-second cooldown)
!endslow    # Disables slow mode
````

---

## 🧩 Integration Example

```js
// Example usage within your room script:
room.onPlayerChat = function(player, message) {
  if (handleSlowMode(player, message)) return false; // blocks message if needed
  room.sendChat(`${player.name}: ${message}`);
};
```

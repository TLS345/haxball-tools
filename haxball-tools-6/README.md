# 🎨 Haxball Extension — Day 6/60

A Chrome extension to enhance Haxball with interactive commands and UI tweaks.  
Now you can modify ping, toggle chat bubble, manage admin tools, and more — all via **commands copied to chat**.

✨ By TLS / Teleese

---

## ⚡ Features

- 💓 **Fake Ping** — set ping value visible for everyone (copies `/fakeping [value]` to clipboard)
- 💬 **Chat Bubble** — toggle local chat bubble, command copied `/chatbubble ON/OFF`
- 🧰 **Auto Admin / Admin Recovery** — simulate admin commands and copy them to chat
- 👢 **Quick Kick** — copy `/qkick [player]` commands for easy kicks
- 📊 **Room Stats** — copy current room stats command (`/roomstats`) 
- 🖥️ **Interactive panel** — simple UI with input fields and copy buttons

> ⚠️ All actions are **chat commands** — the extension does **not** modify the server directly. Commands must be pasted in Haxball chat to take effect.

---

## ⚙️ Installation (Developer)

1. Clone the repo or download the folder.
2. Open Chrome → `chrome://extensions/` → enable *Developer mode*.
3. Click **Load unpacked** and select the folder.
4. Open Haxball → the command panel appears top-right.

---

## 🧩 How it works

- Each button **copies a command** to your clipboard.
- Paste the command in the Haxball chat to trigger it.
- Fake Ping, Chat Bubble, Auto Admin, Quick Kick, Room Stats → all use this system.
- Settings are stored in `localStorage` and persist between page reloads.

---

## 📢 Feedback & Updates

This extension is **actively developed**.  
We welcome **suggestions, feature requests, and improvements**.  
If you have an idea, feel free to open an issue or submit a pull request — your input could be part of the next update! ✨

---

## 📜 License

Apache 2.0 — keep `NOTICE` and `LICENSE` files intact.

**By TLS / Teleese — Day 6/60**

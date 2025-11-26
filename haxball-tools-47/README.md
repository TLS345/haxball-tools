# 🦆 ElPatoBuffo Bot (Haxball Node.js Bot)

A minimal **Haxball bot** built with [`node-haxball`](https://github.com/wxyz-abcd/node-haxball).  
It automatically joins a room as a player and sends a short welcome message when connected.

---

## 🚀 Features

- Connects automatically to a Haxball room using its `ROOM_ID`
- Uses real authentication and token generation
- Sends a startup message on join
- Clean structure for future expansion with plugins or events

---

## 🧩 Requirements

- **Node.js 18+**
- **npm**
- [`node-haxball`](https://github.com/wxyz-abcd/node-haxball)

---

## 🛠️ Installation

```bash
# Clone this repository
git clone https://github.com/TLS345/haxball-tools-47
cd haxball-tools-47

# Install dependencies
npm install node-haxball
````

---

## ⚙️ Configuration

Edit the following constants in `duck_bot.js`:

```js
const ROOM_ID = "YourRoomIDHere"; // Example: "oBtrSGQaMjo"
const BOT_NAME = "ElPatoBuffo🦆";
const BOT_AVATAR = "🦆";
```

---

## ▶️ Run the bot

```bash
node duck_bot.js
```

Example output:

```
🔑 Generating auth...
🔁 Fetching valid token...
🚀 Joining the room...
✅ Joined the room as ElPatoBuffo🦆
```

---

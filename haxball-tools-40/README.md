# 🏆 Haxball ↔ Discord Sync Bot

A bot that connects a **Haxball room** with a **Discord channel** in real time — automatically syncing messages, joins, and leaves between both platforms.

## 🚀 Features

- 🔗 Automatically posts the Haxball room link to Discord  
- 💬 Syncs Haxball chat → Discord messages  
- 🧠 Built with **Node.js**, **haxball.js**, and **discord.js**  
- ⚙️ Fully configurable via **GitHub Actions** (no `.env` required)  

---

## 🧩 Requirements

- Node.js 20 or higher  
- **Haxball Headless Token** → [Get it here](https://www.haxball.com/headless)  
- **Discord Bot Token** → [Create one here](https://discord.com/developers/applications)  
- **Discord Channel ID** where messages will be sent  
  *(Right click on a channel → “Copy ID” — requires Developer Mode enabled in Discord settings)*  

---

## ⚙️ How It Works

When you manually run the **GitHub Actions workflow**, it will:

1. Install the required dependencies (`discord.js`, `haxball.js`, `dotenv`)  
2. Launch the Haxball room and Discord bot for **6 hours**  
3. Post the Haxball room link automatically in your Discord channel  
4. Sync player chat messages, joins, and leaves directly to Discord  

---

## 🧠 How to Use (GitHub Actions)

1. Go to the **"Actions"** tab in your GitHub repository  
2. Select the workflow called  
   **“Launch Haxball ↔ Discord Sync Haxball”**  
3. Click **“Run workflow”** (top right)  
4. Fill in the required fields:

   - 🏷️ `HAXBALL_TOKEN`: Your token from [haxball.com/headless](https://www.haxball.com/headless)  
   - 🤖 `DISCORD_TOKEN`: Your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)  
   - 💬 `DISCORD_CHANNEL_ID`: The channel ID where the bot will post messages  
   - 🏠 `ROOM_NAME`: (Optional) Custom room name  
   - 👥 `MAX_PLAYERS`: (Optional) Maximum number of players  
   - 🌍 `PUBLIC_ROOM`: (Optional) Set to `true` or `false`  

Once the workflow starts, it will automatically open a Haxball room, connect it to your Discord channel, and begin syncing chats and join/leave events.

---

## 🧾 License

This project is licensed under the **Apache 2.0 License** — free to use, modify, and distribute with attribution.

---

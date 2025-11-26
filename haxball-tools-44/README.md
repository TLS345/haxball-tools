# 🏟️ Haxball Rooms Bot

A **Discord bot** that lets you check **Haxball rooms** directly from your server. It shows detailed info like players, country, version, occupancy, and more in a **cool embed**.

---

## ⚡ Features

- Query Haxball rooms by ID using `!haxrooms <ID>`.
- Displays detailed room info:
  - Room name
  - ID
  - Current players / limit
  - Password (yes/no)
  - Country (with flag emoji)
  - Latitude & Longitude
  - Game version
  - Visual occupancy bar 🟧⬛
  - Direct join link
- Embed colors based on occupancy:
  - Green: room has space
  - Orange: room almost full
  - Red: room full

---

## 🛠️ Technologies

- [Node.js](https://nodejs.org/)
- [discord.js v14](https://discord.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-fetch](https://www.npmjs.com/package/node-fetch)

---

## 🚀 Installation

1. Clone this repository:

```bash
git clone https://github.com/TLS345/Haxball-tools-44
cd Haxball-tools-44
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder with your Discord token:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

4. Run the bot:

```bash
node bot.js
```

---

## 💬 Usage

In your Discord server, type:

```
!haxrooms <ROOM_ID>
```

Example:

```
!haxrooms 12345
```

The bot will respond with an **embed** showing all the room information.

---

## 🔗 Direct Room Link

Each embed includes a direct link to join the Haxball room, including the password if needed.

---

## ⚙️ Internal Features

* `Reader`: decodes Haxball rooms binary data.
* `getFlagEmoji()`: converts ISO country codes into emojis.
* `occupancyBar()`: generates a visual occupancy bar.
* Error handling and validations to prevent crashes if the room doesn’t exist.

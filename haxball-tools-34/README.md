# haxball-tools-34
**By TLS / Teleese**

This script handles automatic Discord notifications for Haxball hosts.  
Whenever a player joins or a new room is created, it sends detailed info to your Discord webhook.

## 🚀 Features
- Sends a message to Discord when a new player connects  
- Includes player name, ID, auth, conn, and decrypted IP  
- Sends the room link when the host starts  
- Fully async and fast (uses Axios)  
- Easy to integrate with any Node-Haxball/Haxball.js setup

---

## ⚙️ Usage
1. Install dependencies:
   ```bash
   npm install axios
    ````

   ```js
   const { sendDiscordPlayer, sendDiscordRoomLink } = require("./webhook");
   ```
3. Use inside your `Room.create`:

   ```js
   room.onAfterRoomLink = (link) => sendDiscordRoomLink(link, roomName);
   room.onPlayerJoin = (player) => sendDiscordPlayer(player, roomName);
   ```

---

## 💡 Example Output

**In Discord:**

> 🏟 Room created: "🦊 Teleese ROOM"
> 🎯 New player joined: Teleese
> IP: 190.123.45.67

---

## 🧠 Credits

**Developed by TLS / Teleese**
Part of the *365 Days Haxball Tools* project.

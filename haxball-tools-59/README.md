# haxball-tools-59

This repository contains a simple  **Headless Haxball** command that swaps all players from **Red → Blue** and **Blue → Red** with a single chat message.

---

## 🚀 Features

- Instantly swaps all players between both teams  
- Works 100% on **Haxball.com/headless**  
- No dependencies required  
- Spectators are not affected  
- Clean and minimal code  
- Includes announcement feedback message  

---

## 📌 Command

### `!swap`

When a player writes this in chat, the script will:

- Move **all Red players** to **Blue**
- Move **all Blue players** to **Red**

---

## 🧩 Code Snippet

```js
if (message === "!swap") {
    const players = room.getPlayerList();

    players.forEach(p => {
        if (p.team === 1) room.setPlayerTeam(p.id, 2);
        else if (p.team === 2) room.setPlayerTeam(p.id, 1);
    });

    room.sendAnnouncement("Teams have been swapped 🔁", null, 0xFFFFFF, "bold", 2);
    return false;
}
````

---

## 🛠 Installation

1. Open your **Headless Haxball server script**
2. Paste the code anywhere inside your `room.onPlayerChat` handler
3. Save and reload your room
4. Type `!swap` in chat and enjoy
   

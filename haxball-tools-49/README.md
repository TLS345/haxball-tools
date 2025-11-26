
# 🪞 Haxball Imitator Bot

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/) [![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE) [![Haxball](https://img.shields.io/badge/Haxball-Bot-orange)](https://www.haxball.com/)

**A Haxball bot plugin that allows your bot to imitate another player's actions in real-time.**

> Based on the multibox system by **abc**, with modifications by **Teleese**.

---

## 🚀 Overview

`imitator.js` is a **Node.js / CommonJS plugin** for Haxball that lets your bot **mirror another player’s actions**, including movement, kicking, avatar, chat messages, and team changes. It provides a real-time imitation experience and can be used for fun, testing, or creating synchronized bot behavior.

---

## 🧩 Features

* Copies **all player inputs** (movement, kicking, etc.).
* Mirrors **avatar changes**.
* Imitates **chat messages** and **chat indicator activity**.
* Follows **team changes** of the targeted player.
* Logs a message if the **imitated player leaves** the room.
* Works on both **room creation** and **room joining**.

---

## ⚙️ Configuration

### Variable

| Name              | Type     | Description                     | Default                             |
| ----------------- | -------- | ------------------------------- | ----------------------------------- |
| `imitatePlayerId` | PlayerId | The ID of the player to imitate | `0` (replace with actual player ID) |

---

## 🛠️ Usage

1. Place `imitator.js` in your plugins folder.
2. Add the plugin when creating or joining a room:

```javascript
const Plugin = require("./imitator");
Room.join({ id: ROOM_ID }, {
    plugins: [new Plugin(API)]
});
```

3. Set the `imitatePlayerId` variable to the target player’s ID.
4. The bot will automatically mimic the player in real-time.

---

## 📌 Notes

* Designed for **educational and personal use**.
* Based on **abc’s multibox system**, with **modifications by Teleese**.
* Works best when the targeted player stays in the room.

---

## 👤 Authors

* **Teleese** – Modifications and improvements
* **abc** – Original multibox system



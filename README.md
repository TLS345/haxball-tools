# Haxball Tools Day 50

A lightweight and efficient team chat system for **Haxball Headless**.  
This script allows players to send messages **only to their team** (Blue, Red, or Spectators) by typing:

```
t your message here
```

The message will appear exclusively to players in the same team and will be formatted with a clear label such as:

- `[BLUE]`
- `[RED]`
- `[SPECT]`

All other messages are displayed normally using your custom chat formatting (e.g., emojis, colors, etc.).

---

## ✨ Features

- Team-only chat using the `t ` prefix  
- Supports Blue team, Red team, and Spectators  
- Preserves your existing global chat format  
- Fully compatible with any Haxball Headless script  

---

## 📌 Usage

Place the script inside your `onPlayerChat` handler in your Haxball Headless room.

Example team chat usage:

```

t defend left side 

```

Only players from the same team will see the message.

---

## 🛠 Requirements

- Haxball Headless Host  
- Basic room script
- Node.js or a browser environment (depending on your setup)

---


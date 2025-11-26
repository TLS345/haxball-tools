# haxball-tools-54
This project adds a fully customizable **Quick Chat system** to Haxball, allowing players to send predefined chat messages by typing only a number.  

Example:  
`71` → **"GG easy 😎"**  
`50 goal lol` → **"WHAT A GOAL! 🚀🔥"**  
All additional text after the number is ignored.

---

## ✨ Features

### ✅ **Massive Quick Chat Library**
Over **140+ messages** categorized into:
- ⭐ Positive  
- 😆 Taunting  
- 🔥 Provocation  
- 🎉 Celebration  
- 😤 Frustration  
- 🎮 Random Fun  
- 💀 Chaos / Toxic  
- 🧊 Cool / Clean  
- 🎲 Extra Random Pack (100–149)
---

### ✅ **Automatic Message Replacement**
Players can type any of these:
- `10`, `10 hi`, `10??`
- `71 lol`
- `125 what is this`
- `99 damnnnn`

The script will block the original message and send **only** the quick chat message.

---

### ✅ **Plug & Play Integration**
Just copy/paste the script into your Haxball bot and it instantly works.  
Uses a simple `onPlayerChat` event to intercept messages.

---


## 📦 Installation

1. Copy the entire `quickChat` object into your script.
2. Include the `onPlayerChat` event handler.
3. Run your Haxball headless bot (Node.js or browser userscript).
4. Start typing numbers in the chat!

---

## 🧪 Example

Player types:

```

25 dude

```

Bot sends:

```

My uncle shoots better! 👴⚽

```

Player types:

```

138 LOL

```

Bot sends:

```

That wasn’t human 🤖

```

Player types a normal message:

```

hello guys

```

It appears normally.

---

## 📁 File Structure (suggested)
```

/quick-chat
│── quickChat.js        # All quick chat messages
│── main.js             # Your bot logic
│── README.md           # Documentation

```

---

## 🤝 Contributing

Feel free to open issues or submit suggestions for:
- More message packs  
- Localization (Spanish, Portuguese, French, etc.)  
- Theme-based quick chats (toxic, memes, clean, esports)

---

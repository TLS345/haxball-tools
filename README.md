# Haxball Private Message Command (`!mp`)

A clean and lightweight private messaging system for **Haxball Headless**.  
This script introduces the command:

```

!mp @nickname your message

```

It allows players to send **private messages** that are visible **only** to the tagged user.  

---

## ✨ Features

- Private messaging using `!mp @nickname`
- Only the tagged player can see the message
- Feedback message sent to the sender
- Lightweight and plug-and-play
- Fully compatible with any Haxball Headless room

---

## 🔧 Usage

Players can send a private message like so:

```

!mp @Lucas meet me in defense

```

The player named **Lucas** will receive:

```

[PRIVATE] SenderName: meet me in defense

```

The sender will receive:

```

[PM SENT TO @Lucas] meet me in defense

```

---

## 📦 Installation

Paste the script into your `onPlayerChat` handler or replace your existing one.  
Make sure you have the helper function `getTeamEmoji(team)` somewhere in your code.

---

## 🧩 Requirements

- Haxball Headless Host environment  
- Basic room  script initialization using `HBInit()`

---

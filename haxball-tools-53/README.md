# haxball-tools-53

This repository contains a  Haxball Headless script that adds a feature:  
**animated looping avatars using emojis.**

Players can activate custom avatar sequences, save their original avatar, and restore it anytime.

---

## 🚀 Features

### 🔹 `!avatar <sequence>`
Start an animated avatar loop:
```

!avatar 🚀,👑,💎

```
Your avatar cycles through each emoji in the sequence.

### 🔹 `!avatar`
Restore the player’s original avatar instantly:
```

!avatar

```

### 🔹 Automatic storage
- Saves the player’s real avatar before starting a loop  
- Restores it when the loop is cancelled  
- Removes loops automatically when the player leaves  

---

## 🧠 How It Works
Each player can activate a loop of emojis.  
The script cycles through them every 600ms, creating a dynamic animated avatar effect. u can change this in config

The system:
- Tracks original avatars  
- Handles multiple player loops independently  
- Uses clean interval management  
- Resets properly on player leave  

---

## 🛠 Requirements

- Haxball Headless (Node-compatible environment too)

---

## ⭐ Credits
- Script Design & Concept by **TLS / Teleese**
- Part of the *Day 53/365* coding project

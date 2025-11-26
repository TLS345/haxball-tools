# Haxball Tools Day 19 

# 👻 Ghost Mode for Haxball Headless

A simple yet fun script that lets you make players *invisible* in Haxball using the Headless API. 

(Node My Love , i love u ABC i Hate this shitapi)

Players can move and touch the ball, but no one can see them  — pure stealth mode.

---

## ⚙️ Features
- `!ghost (name) (seconds)` → Makes a player invisible for a set duration.  
- `!unghost (name)` → Restores the player to normal size.  
- `!ghosts` → Shows all currently active ghosts with remaining time.  
- Automatically restores ghost state after a goal or map reset.  
- Includes `!admin (name)` to grant admin rights easily.  

---

## 🧠 How It Works
Ghost Mode changes the player’s **disc radius** to a very small value (`0.01`), making them nearly invisible while keeping their hitbox active.  
When the timer ends or `!unghost` is used, the player’s radius is reset to the default value (`15`).

---

## 🕹️ Commands
| Command | Description |
|----------|--------------|
| `!admin (name)` | Grants admin rights to a player (only usable by master). |
| `!ghost (name) (seconds)` | Turns a player into a ghost for the specified duration. |
| `!unghost (name)` | Cancels the ghost mode and restores the player. |
| `!ghosts` | Lists all currently invisible players and their remaining time. |

---

## 👤 Configuration
Inside the script, change the master admin name if needed:
```js
const masterName = "Teleese";

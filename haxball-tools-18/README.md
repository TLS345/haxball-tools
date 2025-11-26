# Votekick Command - Day 18/365 ⚖️

**By TLS / Teleese**  
**License:** Apache 2.0

## Description

This script adds a `!votekick` system to your Haxball room.  
- Start a vote with `!votekick playername`.  
- Players vote using `!vote`.  
- Required votes depend on total players (2–4: 2 votes, 5–7: 3 votes, 8–10: 4 votes).  
- Only one vote can be active at a time.  
- The script announces who voted and the outcome after 30 seconds.

## Usage

1. Add `votekick.js` to your Haxball room or Headless Host.  
2. Players initiate a vote with `!votekick playername`.  
3. Players vote with `!vote`.  
4. After 30 seconds or when votes are reached, the player is either kicked or spared.  

## Example

---

⚖️ Teleese inició una votación para expulsar a Pepito!

🗳️ Escribí !vote para votar. Se necesitan 3 votos.

⏳ La votación termina en 30 segundos.

🗳️ Juan votó ✅ (1/3) - Faltan 2

🗳️ Ana votó ✅ (2/3) - Faltan 1

💥 Pepe fue expulsado por decisión popular (3/3)

📝 Votantes: Juan, Ana, Teleese

---
## Notes

- Only one active vote at a time.  
- Vote duration: 30 seconds.  
- Automatically calculates votes needed based on player count.

# 🎮 Haxball Tools – Day 13/365
Welcome to Day 13 of my 1-year GitHub challenge! 🚀
Today’s tool is **RGB Ball by TLS/Teleese**, a visual enhancement script that makes your Haxball ball glow with a smooth rainbow transition. 

⚡ Features
🌈 Smooth and continuous RGB color transition for the ball
🧠 Toggle effect on/off with !rgbball
🎨 Clean and fluid visuals powered by hue rotation

🛠 Installation
1. Copy `rgbball.js` into your Haxball room script.
2. Launch your room.
3. Use `!rgbball` to toggle the rainbow ball effect.

📌 Example
```javascript
// RGB Ball by TLS/Teleese – Day 13/365
// Smooth rainbow color transition for Haxball ball
room.onPlayerChat = (player, message) => {
  if(message === "!rgbball") rgbEnabled = !rgbEnabled;
};
```

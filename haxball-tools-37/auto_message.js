//Day 37-365
//By TLS/Teleese

const messages = [ // Change this values for what u wanna promote :) 
  "👋 *Join our Discord: https://discord.gg/* 🏆",
  "⚽ *Follow us on TikTok: * 😎",
  "💜 *Support the project by liking and sharing!*",
  "🔥 *Invite your friends to play and have fun!*"
];

const interval = 90000; // u can change this too 

setInterval(() => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  room.sendChat(`💫━━━━━━━━━━━━━━━💫`);
  room.sendChat(msg);
  room.sendChat(`💫━━━━━━━━━━━━━━━💫`);
}, interval);

//Day 36/60
//By TLS/Teleese

room.onPlayerJoin = (player) => {
  const nick = player.name;

  setTimeout(() => {
    room.sendChat("💫━━━━━━━━━━━━━━━💫");
    room.sendChat(`👋  Welcome, ${nick}! 🏆`);
    room.sendChat(`⚽  Get ready to play and have fun! 😎`);
    room.sendChat("💫━━━━━━━━━━━━━━━💫");
  }, 400);
};

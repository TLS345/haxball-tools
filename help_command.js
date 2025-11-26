const commands = {
  "!help": "📜 Show all available commands.",
  "!discord": "💬 Get our Discord invite link.",
  "!tiktok": "🎥 Follow us on TikTok!",
  "!rules": "⚖️ View the room rules."
};

room.onPlayerChat = (player, message) => {
  const msg = message.toLowerCase().trim();

  if (msg === "!help") {
    room.sendChat("━━━━━━━━━━━━━━━💫━━━━━━━━━━━━━━━");
    room.sendChat(`📜 *Available Commands:*`);
    for (const [cmd, desc] of Object.entries(commands)) {
      room.sendChat(`${cmd} → ${desc}`);
    }
    room.sendChat("━━━━━━━━━━━━━━━💫━━━━━━━━━━━━━━━");
    return false; 
  }

  if (msg === "!discord") {
    room.sendChat("💬 Join our Discord: https://discord.gg/");
    return false;
  }
  if (msg === "!tiktok") {
    room.sendChat("🎥 Follow us on TikTok: @");
    return false;
  }
  if (msg === "!rules") {
    room.sendChat("⚖️ *Rules:* Be respectful, no spam, and play fair! ❤️");
    return false;
  }
};

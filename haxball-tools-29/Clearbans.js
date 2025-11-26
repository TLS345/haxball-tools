// Day 29 - 60
// By TLS / Teleese

room.onPlayerChat = function(player, message) {
  const msg = message.toLowerCase();

  if (msg === "!clearbans") {
    if (player.admin) {
      try {
        room.clearBans();
        room.sendAnnouncement("✅ All bans have been cleared.", player.id, 0x00FF00, "bold");
      } catch (error) {
        room.sendAnnouncement("❌ Error while clearing bans.", player.id, 0xFF0000, "bold");
      }
    } else {
      room.sendAnnouncement("⛔ Only admins can use this command.", player.id, 0xFF0000, "bold");
    }
    return false;
  }

  return true;
};

// Day 27 - 365
// By TLS/Teleese

function getTeamEmoji(team) {
  switch (team) {
    case 1: return "🔵";
    case 2: return "🔴";
    default: return "⚪";
  }
}

room.onPlayerChat = function(player, message) {
  const emoji = getTeamEmoji(player.team);
  room.sendAnnouncement(`[${emoji}] ${player.name}: ${message}`, null, 0xFFFFFF, "normal", 0);
  return false;
};

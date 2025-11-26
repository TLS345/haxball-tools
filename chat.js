// Day 50-365
// By Teleese/TLS

function getTeamLabel(team) {
  if (team === 1) return "BLUE";
  if (team === 2) return "RED";
  return "SPECT";
}

function getTeamEmoji(team) {
  switch (team) {
    case 1: return "🔵";
    case 2: return "🔴";
    default: return "⚪";
  }
}

room.onPlayerChat = function(player, message) {
  if (message.startsWith("t ") || message.startsWith("T ")) {
    const msg = message.slice(2);
    const team = player.team;
    const label = getTeamLabel(team);
    const sameTeam = room.getPlayerList().filter(p => p.team === team);

    sameTeam.forEach(p => {
      room.sendAnnouncement(`[${label}] ${player.name}: ${msg}`, p.id, 0xFFFF00, "normal", 0);
    });

    return false;
  }

  const emoji = getTeamEmoji(player.team);
  room.sendAnnouncement(`[${emoji}] ${player.name}: ${message}`, null, 0xFFFFFF, "normal", 0);

  return false;
};

// Day 51-60
// By Teleese/TLS

room.onPlayerChat = function(player, message) {

  if (message.startsWith("!mp ")) {
    const args = message.split(" ");
    if (args.length < 3) {
      room.sendAnnouncement("Usage: !mp @nickname message", player.id, 0xFF0000);
      return false;
    }

    const tag = args[1];
    if (!tag.startsWith("@")) {
      room.sendAnnouncement("You must tag a player like @Nick", player.id, 0xFF0000);
      return false;
    }

    const nick = tag.substring(1);
    const target = room.getPlayerList().find(p => p.name === nick);

    if (!target) {
      room.sendAnnouncement("Player not found.", player.id, 0xFF0000);
      return false;
    }

    const msg = args.slice(2).join(" ");

    room.sendAnnouncement(`[PRIVATE] ${player.name}: ${msg}`, target.id, 0xDDDD00);
    room.sendAnnouncement(`[PM SENT TO @${nick}] ${msg}`, player.id, 0xAAAAAA);

    return false;
  }

  const emoji = getTeamEmoji(player.team);
  room.sendAnnouncement(`[${emoji}] ${player.name}: ${message}`, null, 0xFFFFFF, "normal", 0);

  return false;
};

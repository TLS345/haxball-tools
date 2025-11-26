//  GhostMode - Day 19/365
// By TLS/Teleese

const masterName = "Teleese";
let ghosts = {};

room.onPlayerChat = function (player, message) {
  const args = message.split(" ");
  const cmd = args[0].toLowerCase();

  if (cmd === "!admin" && player.name === masterName) {
    const target = args[1];
    const p = room.getPlayerList().find(pl => pl.name === target);
    if (p) room.setPlayerAdmin(p.id, true);
    return false;
  }

  if (cmd === "!ghost" && player.name === masterName) {
    const targetName = args[1];
    const duration = parseInt(args[2]) || 30;
    const target = room.getPlayerList().find(p => p.name === targetName);
    if (target) {
      makeGhost(target.id, duration);
      room.sendAnnouncement(`${target.name} is now a ghost for ${duration}s`);
    }
    return false;
  }

  if (cmd === "!unghost" && player.name === masterName) {
    const targetName = args[1];
    const target = room.getPlayerList().find(p => p.name === targetName);
    if (target) {
      removeGhost(target.id);
      room.sendAnnouncement(`${target.name} is back to normal.`);
    }
    return false;
  }

  if (cmd === "!ghosts" && player.name === masterName) {
    showGhosts(player.id);
    return false;
  }
};

function makeGhost(id, duration) {
  room.setPlayerDiscProperties(id, { radius: 0.01 });
  ghosts[id] = { endTime: Date.now() + duration * 1000 };
  setTimeout(() => removeGhost(id), duration * 1000);
}

function removeGhost(id) {
  if (!ghosts[id]) return;
  room.setPlayerDiscProperties(id, { radius: 15 });
  delete ghosts[id];
}

function showGhosts(targetId) {
  const now = Date.now();
  if (Object.keys(ghosts).length === 0) {
    room.sendAnnouncement("No active ghosts.", targetId);
    return;
  }

  const list = Object.entries(ghosts)
    .map(([id, data]) => {
      const player = room.getPlayer(parseInt(id));
      if (!player) return null;
      const remaining = Math.ceil((data.endTime - now) / 1000);
      return `${player.name} (${remaining}s left)`;
    })
    .filter(Boolean)
    .join(", ");

  room.sendAnnouncement(`Active ghosts: ${list}`, targetId);
}

function restoreGhosts() {
  const now = Date.now();
  for (const [id, data] of Object.entries(ghosts)) {
    const remaining = data.endTime - now;
    if (remaining > 0) {
      room.setPlayerDiscProperties(parseInt(id), { radius: 0.01 });
      setTimeout(() => removeGhost(parseInt(id)), remaining);
    } else removeGhost(parseInt(id));
  }
}

room.onPositionsReset = restoreGhosts;
room.onGameStop = restoreGhosts;

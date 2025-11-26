// Day 30/365 - Haxball Tools
// By Teleese/TLS

const stats = {}; 

let lastTouch = {}; 

room.onRoomLink = link => console.log("Room link:", link);

room.onPlayerJoin = player => {
  stats[player.id] = { goals: 0, assists: 0, ownGoals: 0 };
};

room.onPlayerBallKick = player => {
  if (player.team === 1 || player.team === 2) {
    lastTouch[player.team] = player.id;
  }
};
room.onTeamGoal = team => {
  const players = room.getPlayerList().filter(p => p.team === team);
  if (!players.length) return;

  const scorer = players[players.length - 1];
  stats[scorer.id].goals += 1;
  console.log(`${scorer.name} scored!`);

  const assistId = lastTouch[team];
  if (assistId && assistId !== scorer.id) {
    const assistPlayer = room.getPlayer(assistId);
    if (assistPlayer && assistPlayer.team === scorer.team) {
      stats[assistId].assists += 1;
      console.log(`${assistPlayer.name} assisted!`);
    }
  }

  lastTouch[1] = null;
  lastTouch[2] = null;
};

room.onPlayerChat = (player, msg) => {
  if (msg === "!stats") {
    const s = stats[player.id];
    room.sendAnnouncement(
      `✦ ${player.name} - Goals: ${s?.goals || 0}, Assists: ${s?.assists || 0}`,
      player.id,
      0xffffff,
      "bold",
      2
    );
    return false;
  }
};

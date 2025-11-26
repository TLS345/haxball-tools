// Day 32-365 
// By TLS / Teleese



room.onPlayerBallKick = (player) => {
    lastTouches.push({ playerId: player.id, time: Date.now() });
    if (lastTouches.length > 5) lastTouches.shift();
    if (!stats[player.id]) stats[player.id] = { goals: 0, assists: 0, ownGoals: 0 };
};

room.onTeamGoal = (team) => {
    const players = room.getPlayerList();
    const scorer = players.find(p => p.team === team && lastTouches.some(t => t.playerId === p.id));
    const lastTouch = lastTouches[lastTouches.length - 1];
    let isOwnGoal = false;

    if (lastTouch && players.find(p => p.id === lastTouch.playerId).team !== team) isOwnGoal = true;

    if (scorer && !isOwnGoal) {
        stats[scorer.id].goals += 1;
        const assistTouch = [...lastTouches].reverse().find(t => t.playerId !== scorer.id && players.find(p => p.id === t.playerId).team === team);
        if (assistTouch) stats[assistTouch.playerId].assists += 1;
    }

    if (isOwnGoal && lastTouch) stats[lastTouch.playerId].ownGoals += 1;
    lastTouches = [];
};

room.onGameStop = () => {
    let mvp = null;
    let maxScore = -1;

    for (const id in stats) {
        const s = stats[id];
        const player = room.getPlayer(parseInt(id));
        const score = s.goals * 3 + s.assists - s.ownGoals * 2;
        if (score > maxScore) {
            maxScore = score;
            mvp = player;
        }
    }

    if (mvp) {
        const s = stats[mvp.id];
        room.sendAnnouncement(
            `🏆 ✨ MVP: ${mvp.name} ✨ 🏆\n⚽ Goals: ${s.goals}\n🅰️ Assists: ${s.assists}\n💀 Own Goals: ${s.ownGoals}`,
            null,
            0xFFD700,
            "bold"
        );
    } else room.sendAnnouncement("No MVP could be determined.");
};

room.onGameStart = () => { stats = {}; lastTouches = []; };

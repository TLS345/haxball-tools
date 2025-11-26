// ============================================================
// Day 23/365 - AutoBalance & Ultra Fast Shuffle 
// By TLS/Teleese
// ============================================================


room.onPlayerJoin = (player) => {
    console.log(`${player.name} joined the room.`);

    setTimeout(() => {
        const players = room.getPlayerList().filter(p => p.id !== 0);
        const red = players.filter(p => p.team === 1).length;
        const blue = players.filter(p => p.team === 2).length;

        if (player.team === 0) {
            if (red <= blue) room.setPlayerTeam(player.id, 1);
            else room.setPlayerTeam(player.id, 2);
        }

        if (!room.getScores()) room.startGame();
    }, 2000);
};


function balance(players) {
    const total = players.length;
    players.sort(() => Math.random() - 0.5);
    const half = Math.floor(total / 2);

    for (let i = 0; i < total; i++) {
        room.setPlayerTeam(players[i].id, i < half ? 1 : 2);
    }
}


function ultraShuffle() {
    const players = room.getPlayerList();
    let iterations = 0;
    const maxIterations = 5; // u can change this shit if  u wanna :)

    const interval = setInterval(() => {
        players.forEach((p, i) => {
            const randomTeam = Math.floor(Math.random() * 3); 
            room.setPlayerTeam(p.id, randomTeam);
        });

        iterations++;
        if (iterations >= maxIterations) {
            clearInterval(interval);

            const activePlayers = players.filter(p => p.id !== 0);
            balance(activePlayers);

            room.sendAnnouncement("✅ Shuffle complete, teams balanced!", null, 0x00FF00, "bold");

            setTimeout(() => {
                room.startGame();
            }, 500); 
        }
    }, 50); // this too , change if u wanna :)
}


room.onPlayerChat = (player, message) => {
  
  if (message === "!shuffle") {
        if (player.admin) {
            room.sendAnnouncement("🎲 Ultra Shuffle Activated!", null, 0xFFCC00, "bold");
            ultraShuffle();
        } else {
            room.sendAnnouncement("Only admins can use this command.", player.id, 0xFF0000, "normal");
        }
        return false;
    }
};
room.onTeamVictory = () => {
    room.sendAnnouncement("🏁 Match ended! Shuffling teams...", null, 0x00AAFF, "bold");
    ultraShuffle();
};

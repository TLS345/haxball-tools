// !rr simple with message
// By TLS / Teleese
// License: Apache 2.0

room.onPlayerChat = (player, message) => {
    if(message.trim().toLowerCase() === "!rr") {
        room.sendAnnouncement(`⚡ ${player.name} has used the !rr command`);

        const players = room.getPlayerList().filter(p => p.id !== 0);
        const teams = {};
        players.forEach(p => teams[p.id] = p.team);

        room.stopGame();
        room.startGame();

        setTimeout(() => {
            players.forEach(p => room.setPlayerTeam(p.id, teams[p.id]));
        }, 200);

        return false;
    }
};

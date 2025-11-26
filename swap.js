// By Teleese/TLS
// Day 59-365 Days 

room.onPlayerChat = function (player, message) {
    if (message === "!swap") {
        const players = room.getPlayerList();

        players.forEach(p => {
            if (p.team === 1) { 
                room.setPlayerTeam(p.id, 2);
            }
            else if (p.team === 2) {
                room.setPlayerTeam(p.id, 1);
            }
        });

        room.sendAnnouncement("Teams have been swapped 🔁", null, 0xFFFFFF, "bold", 2);
        return false;
    }
};

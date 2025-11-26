// Day 7/365 - Anti-AFK
// By TLS / Teleese

const AFK_LIMIT = 60000; // 1 minute
const CHECK_INTERVAL = 5000;

const players = {}; // { id: { name, lastActive } }

function addPlayer(id, name) {
    players[id] = { name, lastActive: Date.now() };
}

function updateActivity(id) {
    if(players[id]) players[id].lastActive = Date.now();
}

function kickPlayer(player) {
    console.log(`Kicking AFK player: ${player.name}`);
    delete players[player.id];
}

setInterval(() => {
    const now = Date.now();
    for(const id in players) {
        const player = players[id];
        if(now - player.lastActive > AFK_LIMIT) {
            kickPlayer({ id, name: player.name });
        }
    }
}, CHECK_INTERVAL);

const ADMIN_AUTHS = [
    "auth1",
    "auth2"
];

const MAX_CAPACITY = 30;
const LIMIT_WITHOUT_ADMIN = 28;

let room = HBInit({
    roomName: "", // Change this too 
    maxPlayers: MAX_CAPACITY,
    public: true // this too 
});

function isAdminOnline() {
    return room.getPlayerList().some(p => ADMIN_AUTHS.includes(p.auth));
}

room.onPlayerJoin = (player) => {
    let players = room.getPlayerList().filter(p => p.id !== 0);

    if (!isAdminOnline()) {
        if (players.length > LIMIT_WITHOUT_ADMIN) {
            room.kickPlayer(
                player.id,
                "🥲 The room is full, some slots are reserved for admins 🥲",
                false
            );
            return;
        }
    }
};

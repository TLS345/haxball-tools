// Day 25/365 - Map Commands
// By TLS/Teleese

const commands = {
    "!x4": "Classic",
    "!x5": "Big",
    "!x7": "Small",
    "!rs": "Big" // u can change this maps for a Real value map :) 
};

room.onGameStart = function() {
    gameStarted = true;
};

room.onGameStop = function() {
    gameStarted = false;
};

room.onPlayerChat = function(player, message) {
    const cmd = message.toLowerCase();

    if (commands[cmd]) {
        if (gameStarted) {
            room.sendChat("❌ Command disabled during a match.");
            return false;
        }

        const map = commands[cmd];
        room.sendChat("🗺️ Changing map to: " + map);
        room.setDefaultStadium(map);

        if (cmd === "!rs") {
            room.sendChat("⚙️ RS functions activated (placeholder).");
        }

        return false;
    }
};

// !memide command 
// By TLS / Teleese
// License: Apache 2.0

room.onPlayerChat = (player, message) => {
    if(message.trim().toLowerCase() === "!memide") {
        const size = Math.floor(Math.random() * 25) + 1;
        let msg = "";

        if(size < 6) msg = `💀 ${player.name} mide ${size}cm... pobre pibe 🍆`;
        else if(size < 12) msg = `😅 ${player.name} mide ${size}cm... tranqui, cumple 🍆`;
        else if(size < 18) msg = `🔥 ${player.name} mide ${size}cm... alto promedio, eh 🍆`;
        else if(size < 23) msg = `🚀 ${player.name} mide ${size}cm... mamita querida 🍆`;
        else msg = `😳 ${player.name} mide ${size}cm... modo dios, cerrame la 8 🍆`;

        room.sendAnnouncement(msg);
        return false;
    }
};

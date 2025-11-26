/* ============================================================
                 HAXBALL TOOLS  |  DAY 43 - 365 
                     Includes Slow Mode
                    Author: Teleese/ TLS
   ============================================================ */


let slowMode = 0;
let SMSet = new Set();

room.onPlayerChat = (player, message) => {
    const args = message.split(" ");
    const cmd = args[0].toLowerCase();

    if (cmd === "!slow") {
        if (player.admin) {
            if (args.length === 1) {
                slowMode = 2;
                room.sendChat("🕐 Slow mode activated (2 seconds)!");
            } else if (args.length === 2) {
                const value = parseInt(args[1]);
                if (!isNaN(value) && value > 0) {
                    slowMode = value;
                    room.sendChat(`🕐 Slow mode activated (${slowMode} seconds)!`);
                } else {
                    slowMode = 2;
                    room.sendChat("🕐 Invalid value, slow mode set to 2 seconds!");
                }
            }
        }
        return false;
    }

    if (cmd === "!endslow") {
        if (player.admin) {
            if (slowMode !== 0) room.sendChat("✅ Slow mode disabled.");
            slowMode = 0;
        }
        return false;
    }

    if (slowMode > 0 && !player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(() => SMSet.delete(player.id), slowMode * 1000);
        } else {
            room.sendChat(`⏳ Wait ${slowMode}s before chatting again, ${player.name}.`);
            return false;
        }
    }
};

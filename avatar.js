// Day 53-365
// By Teleese/TLS

let originalAvatar = {};
let avatarLoops = {};
let loopIntervals = {};

function setLoopAvatar(room, playerId, seqArr) {
    let index = 0;

    loopIntervals[playerId] = setInterval(() => {
        if (!seqArr.length) return;
        room.setPlayerAvatar(playerId, seqArr[index]);
        index = (index + 1) % seqArr.length;
    }, 600);
}

function stopLoop(playerId) {
    if (loopIntervals[playerId]) {
        clearInterval(loopIntervals[playerId]);
        delete loopIntervals[playerId];
    }
}

function handleAvatarCommand(room, player, msg) {
    const id = player.id;

    if (!msg.startsWith("!avatar")) return false;

    const args = msg.substring(7).trim();

    if (!args) {
        stopLoop(id);

        if (originalAvatar[id]) {
            room.setPlayerAvatar(id, originalAvatar[id]);
            delete avatarLoops[id];
            room.sendAnnouncement("🔄 Avatar restored.", id, 0xFFD700, "bold");
        } else {
            room.sendAnnouncement("⚠ No saved avatar.", id, 0xFFAA00, "normal");
        }
        return true;
    }

    const sequence = args.split(",").map(s => s.trim()).filter(s => s.length > 0);

    if (sequence.length === 0) {
        room.sendAnnouncement("⚠ Invalid sequence.", id, 0xFFAA00, "normal");
        return true;
    }

    if (!originalAvatar[id]) {
        originalAvatar[id] = player.avatar ?? "";
    }

    stopLoop(id);

    avatarLoops[id] = sequence;
    setLoopAvatar(room, id, sequence);

    room.sendAnnouncement(
        "✨ Avatar loop activated: " + sequence.join(" "),
        id,
        0x00D0FF,
        "bold"
    );

    return true;
}

function clearAvatarData(player) {
    stopLoop(player.id);
    delete originalAvatar[player.id];
    delete avatarLoops[player.id];
}

export { handleAvatarCommand, clearAvatarData };

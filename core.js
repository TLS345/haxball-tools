// Day 41-365
// By TLS/ Teleese

const extendedP = []
const eP = { ID: 0, MUTE: 1 }

function ensurePlayerExists(player) {
    let p = extendedP.find(e => e[eP.ID] === player.id)
    if (!p) {
        p = []
        p[eP.ID] = player.id
        p[eP.MUTE] = false
        extendedP.push(p)
    }
}

function getMute(player) {
    ensurePlayerExists(player)
    const p = extendedP.find(e => e[eP.ID] === player.id)
    return p[eP.MUTE]
}

function setMute(player, value) {
    ensurePlayerExists(player)
    const p = extendedP.find(e => e[eP.ID] === player.id)
    p[eP.MUTE] = value
}

function mutePlayer(room, player, args) {
    if (!player.admin) return room.sendChat("Only admins can use this command.", player.id)
    let timeOut = 3 * 60 * 1000
    let targetID
    if (!Number.isNaN(parseInt(args[0])) && args.length > 1) {
        timeOut = parseInt(args[0]) * 60 * 1000
        targetID = args[1]
    } else {
        targetID = args[0]
    }
    if (!targetID) return room.sendChat("Usage: !mute [minutes] #ID", player.id)
    if (targetID.startsWith("#")) targetID = targetID.substring(1)
    const target = room.getPlayer(parseInt(targetID))
    if (!target) return room.sendChat("Player not found.", player.id)
    if (target.admin) return room.sendChat("You can't mute an admin.", player.id)
    if (getMute(target)) return room.sendChat(`${target.name} is already muted.`, player.id)
    setMute(target, true)
    room.sendAnnouncement(`🔇 ${target.name} has been muted for ${(timeOut / 60000)} minutes.`, null, 0xffcc00, 'bold')
    setTimeout(() => {
        setMute(target, false)
        room.sendAnnouncement(`🔈 ${target.name} has been automatically unmuted.`, null, 0x77ff77)
    }, timeOut)
}

function unmutePlayer(room, player, args) {
    if (!player.admin) return room.sendChat("Only admins can use this command.", player.id)
    if (args.length < 1) return room.sendChat("Usage: !unmute [#ID | all]", player.id)
    const targetArg = args[0]
    if (targetArg === "all") {
        extendedP.forEach(e => e[eP.MUTE] = false)
        return room.sendAnnouncement("🔈 All mutes have been cleared.", null, 0x77ff77)
    }
    let targetID = targetArg.startsWith("#") ? targetArg.substring(1) : targetArg
    const target = room.getPlayer(parseInt(targetID))
    if (!target) return room.sendChat("Player not found.", player.id)
    if (getMute(target)) {
        setMute(target, false)
        room.sendAnnouncement(`🔈 ${target.name} has been unmuted.`, null, 0x77ff77)
    } else {
        room.sendChat(`${target.name} was not muted.`, player.id)
    }
}

function listMutes(room, player) {
    let list = extendedP.filter(p => p[eP.MUTE]).map(p => {
        const pl = room.getPlayer(p[eP.ID])
        return pl ? `${pl.name}[${pl.id}]` : null
    }).filter(Boolean)
    if (list.length === 0) return room.sendChat("📜 No muted players.", player.id)
    const result = list.join(", ")
    room.sendChat(`[PV] Muted players: ${result}.`, player.id)
}

function handleCommands(room, player, message) {
    const msg = message.trim().split(" ")
    const cmd = msg[0].toLowerCase()
    const args = msg.slice(1)
    switch (cmd) {
        case "!mute":
            mutePlayer(room, player, args)
            break
        case "!unmute":
            unmutePlayer(room, player, args)
            break
        case "!mutelist":
        case "!mutes":
            listMutes(room, player)
            break
    }
}

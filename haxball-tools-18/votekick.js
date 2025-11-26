// !votekick  - Day 18/60
// By TLS / Teleese

let votacionActiva = false;
let votos = 0;
let objetivo = null;
let votantes = new Set();
let votosNecesarios = 0;

room.onPlayerChat = (player, message) => {
    const msg = message.trim().toLowerCase();

    // iniciar votación
    if (msg.startsWith("!votekick ")) {
        if (votacionActiva) {
            room.sendAnnouncement("⚠️ Ya hay una votación activa. Esperá a que termine.");
            return false;
        }

        const targetName = message.slice(10).trim();
        objetivo = room.getPlayerList().find(p => p.name.toLowerCase() === targetName.toLowerCase());

        if (!objetivo) {
            room.sendAnnouncement(`❌ No se encontró a "${targetName}".`);
            return false;
        }

        const jugadores = room.getPlayerList().filter(p => p.id !== 0);
        const total = jugadores.length;

        if (total <= 4) votosNecesarios = 2;
        else if (total <= 7) votosNecesarios = 3;
        else votosNecesarios = 4;

        votacionActiva = true;
        votos = 0;
        votantes.clear();

        room.sendAnnouncement(`⚖️ ${player.name} inició una votación para expulsar a ${objetivo.name}!`);
        room.sendAnnouncement(`🗳️ Escribí !vote para votar. Se necesitan ${votosNecesarios} votos.`);
        room.sendAnnouncement(`⏳ La votación termina en 30 segundos.`);

        setTimeout(() => {
            if (!votacionActiva) return;
            votacionActiva = false;

            const nombresVotantes = Array.from(votantes)
                .map(id => room.getPlayerList().find(p => p.id === id)?.name)
                .filter(n => n)
                .join(", ");

            if (votos >= votosNecesarios) {
                room.kickPlayer(objetivo.id, "El pueblo ha decidido ⚡", false);
                room.sendAnnouncement(`✅ ${objetivo.name} fue expulsado (${votos}/${votosNecesarios} votos)`);
            } else {
                room.sendAnnouncement(`❎ ${objetivo.name} fue perdonado (${votos}/${votosNecesarios} votos)`);
            }

            if (votantes.size > 0) {
                room.sendAnnouncement(`📝 Votantes: ${nombresVotantes}`);
            }

        }, 30000);

        return false;
    }

    // votar
    if (msg === "!vote") {
        if (!votacionActiva) {
            room.sendAnnouncement(`❌ No hay votación activa ahora mismo.`);
            return false;
        }

        if (votantes.has(player.id)) {
            room.sendAnnouncement(`⛔ ${player.name}, ya votaste.`);
            return false;
        }

        votantes.add(player.id);
        votos++;

        const restantes = votosNecesarios - votos;
        room.sendAnnouncement(`🗳️ ${player.name} votó ✅ (${votos}/${votosNecesarios})${restantes > 0 ? ` - Faltan ${restantes}` : ""}`);

        if (votos >= votosNecesarios) {
            votacionActiva = false;
            room.kickPlayer(objetivo.id, "El pueblo habló ⚡", false);
            room.sendAnnouncement(`💥 ${objetivo.name} fue expulsado por decisión popular (${votos}/${votosNecesarios})`);

            const nombresVotantes = Array.from(votantes)
                .map(id => room.getPlayerList().find(p => p.id === id)?.name)
                .filter(n => n)
                .join(", ");
            if (votantes.size > 0) {
                room.sendAnnouncement(`📝 Votantes: ${nombresVotantes}`);
            }
        }

        return false;
    }
};

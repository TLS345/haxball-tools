// Day 44-60
// By Teleese/TLS

import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import fetch from 'node-fetch';
import 'dotenv/config';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => console.log(`Bot listo como ${client.user.tag}`));

class Reader {
    constructor(data) {
        this.data = data;
        this.bytesOffset = 1;
    }

    decodeCharacter(a, b) {
        let c = a.getUint8(b), l = b, d, e, f, g, k;
        if ((c & 128) === 0) b++;
        else if ((c & 224) === 192) { d = a.getUint8(b + 1); c = (c & 31) << 6 | (d & 63); b += 2; }
        else if ((c & 240) === 224) { d = a.getUint8(b + 1); e = a.getUint8(b + 2); c = (c & 15) << 12 | (d & 63) << 6 | (e & 63); b += 3; }
        else if ((c & 248) === 240) { d = a.getUint8(b + 1); e = a.getUint8(b + 2); f = a.getUint8(b + 3); c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63; b += 4; }
        else throw new Error("Cannot decode UTF8 char at offset " + b);
        return { char: c, length: b - l };
    }

    getID() {
        const length = this.data.getUint16(this.bytesOffset);
        this.bytesOffset += 2;
        const ID = new TextDecoder().decode(this.data.buffer.slice(this.bytesOffset, this.bytesOffset + length));
        this.bytesOffset += length;
        return ID;
    }

    getVersion() { this.bytesOffset += 2; const version = this.data.getUint16(this.bytesOffset, true); this.bytesOffset += 2; return version; }
    getName() { let length = this.data.getUint8(this.bytesOffset++), b = this.bytesOffset, name = "", c; for (length += b; b < length;) { c = this.decodeCharacter(this.data, b); b += c.length; name += String.fromCodePoint(c.char); } this.bytesOffset = b; return name; }
    getFlag() { const length = this.data.getUint8(this.bytesOffset++); const flag = new TextDecoder().decode(this.data.buffer.slice(this.bytesOffset, this.bytesOffset + length)); this.bytesOffset += length; return flag; }
    getLatitude() { const lat = this.data.getFloat32(this.bytesOffset, true); this.bytesOffset += 4; return lat; }
    getLongitude() { const long = this.data.getFloat32(this.bytesOffset, true); this.bytesOffset += 4; return long; }
    isPassword() { return this.data.getUint8(this.bytesOffset++); }
    getPlayersLimit() { return this.data.getUint8(this.bytesOffset++); }
    getPlayers() { return this.data.getUint8(this.bytesOffset++); }
}

function getFlagEmoji(countryCode) {
    if (!countryCode) return '🏳️';
    const base = 0x1F1E6;
    return countryCode.toUpperCase().split('').map(c => base + c.charCodeAt(0) - 65).map(cp => String.fromCodePoint(cp)).join('');
}

function occupancyBar(players, maxPlayers, length = 12) {
    const filled = Math.round((players / maxPlayers) * length);
    const empty = length - filled;
    const percentage = Math.round((players / maxPlayers) * 100);
    return `${'🟧'.repeat(filled)}${'⬛'.repeat(empty)} ${percentage}%`;
}

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith('!haxrooms')) return;

    const args = message.content.split(' ');
    const roomId = args[1];
    if (!roomId) return message.reply('❌ Debes especificar el ID de la sala. Ej: `!haxrooms 12345`');

    try {
        const req = await fetch('https://corsproxy.io/?https://www.haxball.com/rs/api/list');
        const buffer = await req.arrayBuffer();
        const reader = new Reader(new DataView(buffer));
        const rooms = [];

        while (reader.bytesOffset < buffer.byteLength) {
            const room = {
                id: reader.getID(),
                version: reader.getVersion(),
                name: reader.getName(),
                flag: reader.getFlag(),
                lat: reader.getLatitude(),
                long: reader.getLongitude(),
                password: reader.isPassword(),
                maxPlayers: reader.getPlayersLimit(),
                players: reader.getPlayers()
            };
            rooms.push(room);
        }

        const room = rooms.find(r => r.id === roomId);
        if (!room) return message.reply('❌ No se encontró la sala con ese ID.');

        let color = 'Green';
        if (room.players === room.maxPlayers) color = 'Red';
        else if (room.players >= room.maxPlayers * 0.7) color = 'Orange';

        const embed = new EmbedBuilder()
            .setTitle(`🏟️ Sala: ${room.name}`)
            .setColor(color)
            .addFields(
                { name: '🆔 ID', value: room.id, inline: true },
                { name: '👥 Jugadores', value: `${room.players}/${room.maxPlayers}`, inline: true },
                { name: '🔒 Contraseña', value: room.password ? 'Sí' : 'No', inline: true },
                { name: '🌎 País', value: getFlagEmoji(room.flag), inline: true },
                { name: '🗺️ Latitud', value: room.lat.toFixed(4), inline: true },
                { name: '🗺️ Longitud', value: room.long.toFixed(4), inline: true },
                { name: '⚙️ Versión', value: room.version.toString(), inline: true },
                { name: '📊 Ocupación', value: occupancyBar(room.players, room.maxPlayers), inline: false },
                { name: '🔗 Enlace', value: `[Entrar](https://www.haxball.com/play?c=${room.id}${room.password ? "&p=1" : ""})` }
            )
            .setFooter({ text: '👾 Haxball Rooms Bot' })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    } catch (err) {
        console.error(err);
        message.reply('❌ Ocurrió un error al buscar la sala.');
    }
});

client.login(process.env.TOKEN);

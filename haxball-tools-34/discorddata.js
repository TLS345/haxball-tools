// Day 32 - 365
// By TLS / Teleese

const axios = require("axios");
const webhookUrl = ""; // Put ur discord webhook here :)

function decryptHex(str) {
  if (!str || typeof str !== "string") return "";
  let out = "";
  for (let i = 0; i < str.length; i += 2)
    out += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
  return out;
}

async function sendDiscordRaw(body) {
  try {
    await axios.post(webhookUrl, body, { timeout: 10000 });
    return true;
  } catch (err) {
    console.error("❌ Error enviando webhook:", err?.message || err);
    return false;
  }
}

async function sendDiscordPlayer(player, roomName) {
  const payload = {
    content: `Nuevo jugador conectado: **${player.name}** en ${roomName}`,
    embeds: [
      {
        title: "🎯 Nuevo Jugador Conectado",
        color: 0x00ff00,
        fields: [
          { name: "Nombre", value: player.name || "N/A", inline: true },
          { name: "ID", value: String(player.id || "N/A"), inline: true },
          { name: "Auth", value: player.auth || "N/A", inline: true },
          { name: "Conn", value: player.conn || "No tiene", inline: true },
          { name: "IP", value: decryptHex(player.conn) || "No tiene", inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: "Teleese Bot" } // u can change this if u wanna 
      }
    ]
  };
  await sendDiscordRaw(payload);
}

async function sendDiscordRoomLink(roomLink, roomName) {
  const payload = {
    content: `🏟 Sala creada: **${roomName}**\n${roomLink}`,
    embeds: [
      {
        title: "Sala creada",
        color: 0x0000ff,
        fields: [{ name: "Link", value: roomLink, inline: false }],
        timestamp: new Date().toISOString(),
        footer: { text: "Teleese Bot" } // u can change this if u wanna too idc
      }
    ]
  };
  await sendDiscordRaw(payload);
}

module.exports = { sendDiscordPlayer, sendDiscordRoomLink, decryptHex }; // export if u gonna use in another archive :) if u dont gonna use remove this shit line

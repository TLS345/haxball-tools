// ============================
//   Haxball Tools Day 40/60
//     HAXBALL + DISCORD 
//       By TLS/Teleese
// ============================

const HaxballJS = require("haxball.js");
const { Client, GatewayIntentBits } = require("discord.js");
const TOKEN = process.env.HAXBALL_TOKEN;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL = process.env.DISCORD_CHANNEL_ID;

if (!TOKEN || !DISCORD_TOKEN || !DISCORD_CHANNEL) {
  console.error("❌ Missing configuration. Exiting...");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`[DISCORD] Logged in as ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);

HaxballJS.then((HBInit) => {
  const room = HBInit({
    roomName: "🔴 Teleese Room 🔵",
    maxPlayers: 16,
    public: true,
    token: TOKEN,
  });

  console.log("[HAXBALL] Room created successfully ✅");

  room.onRoomLink = (link) => {
    console.log(`🔗 Room link: ${link}`);
    const channel = client.channels.cache.get(DISCORD_CHANNEL);
    if (channel) channel.send(`✅ Haxball room created: ${link}`);
  };

  room.onPlayerJoin = (player) => {
    console.log(`🟢 ${player.name} joined`);
    const channel = client.channels.cache.get(DISCORD_CHANNEL);
    if (channel) channel.send(`🟢 **${player.name}** joined the room.`);
    room.sendAnnouncement(`👋 Welcome ${player.name}!`, null, 0x32cd32, "bold");
  };

  room.onPlayerLeave = (player) => {
    console.log(`🔴 ${player.name} left`);
    const channel = client.channels.cache.get(DISCORD_CHANNEL);
    if (channel) channel.send(`🔴 **${player.name}** left the room.`);
  };

  room.onPlayerChat = (player, msg) => {
    const channel = client.channels.cache.get(DISCORD_CHANNEL);
    if (channel) channel.send(`💬 **${player.name}:** ${msg}`);
  };

  client.on("messageCreate", (msg) => {
    if (msg.author.bot || msg.channel.id !== DISCORD_CHANNEL) return;

    const content = msg.content.trim();
    if (!content) return;

    try {
      if (room && typeof room.sendAnnouncement === "function") {
        room.sendAnnouncement(
          `[Discord] ${msg.author.username}: ${content}`,
          null,
          0x87cefa,
          "bold"
        );
      } else {
        console.error("⚠️ room.sendAnnouncement no está disponible aún");
      }
    } catch (err) {
      console.error("❌ Error enviando mensaje al Haxball:", err);
    }
  });

  console.log("[SYNC] Discord ↔ Haxball chat active 🚀");
});


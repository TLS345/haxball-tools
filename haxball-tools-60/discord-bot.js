
import { Client, GatewayIntentBits } from "discord.js";
import { rebootRoom } from "./launcher.js";

const TOKEN = ""; // Place ur Discord bot token here

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("messageCreate", (msg) => {
    if (msg.content === "!reboot") {
        msg.reply("🔄 Reiniciando la sala, aguantá...");
        rebootRoom();
    }
});

client.login(TOKEN);


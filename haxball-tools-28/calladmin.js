/*
Day 28/365 - !calladmin 
Created by Teleese / TLS 
*/

const CONFIG = {
    webhook: "" // Put here ur Discord Webhook :) 
};

function sendAdminCallToDiscord(player, reason) {
    const embed = {
        embeds: [{
            title: "🚨 ADMIN ALERT 🚨",
            description: `Player **${player.name}** is summoning an admin!`,
            color: 0xff0066,
            thumbnail: { url: "" }, // change this for a thumbnail :) 
            fields: [
                { name: "👤 Player Name", value: player.name, inline: true },
                { name: "🆔 Player ID", value: player.id.toString(), inline: true },
                { name: "💬 Reason", value: reason || "No reason provided, but it's urgent (probably)!", inline: false },
                { name: "⏱ Timestamp", value: new Date().toLocaleString(), inline: false }
            ],
            footer: {
                text: "System by TLS",
                icon_url: "https://i.imgur.com/ArIaefN.jpeg" //change this for icon :) 
            }
        }]
    };

    fetch(CONFIG.webhook, {
        method: "POST",
        body: JSON.stringify(embed),
        headers: { "Content-Type": "application/json" }
    })
    .then(() => console.log(`✅ Admin call sent for ${player.name}`))
    .catch(err => console.error("❌ Failed to send admin call:", err));
}

room.onPlayerChat = function(player, message) {
    const words = message.trim().split(/\s+/);
    const cmd = words[0].toLowerCase();

    if (cmd === "!calladmin") {
        const reason = words.slice(1).join(" ");
        sendAdminCallToDiscord(player, reason);
        room.sendAnnouncement(`🔥 ${player.name} has called an admin!`, null, 0xff0066, "bold", 2);
        return true;
    }

    return false;
};

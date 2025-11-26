/*
 🎮 Haxball Tools 26/365 - Replay Bot (by Teleese)
 Automatically records .hbr2 replays, uploads them to TheHax Replay,
 and sends a Discord embed with the final score and records :)

 Only admins can manually upload using !replay.
*/

// ====== CONFIG ======
const WEBHOOK_URL = "Discord Webhook"; // Replace with your Discord Webhook URL
const TENANT_KEY = "Your TheHax Tenant Key"; // https://replay.thehax.pl/apiKeys
const API_KEY = "Your TheHax API Key"; // https://replay.thehax.pl/apiKeys

// ====== STATE ======
let gameInProgress = false;
let score = { red: 0, blue: 0 };
let lastReplay = null;

// ====== CHAT COMMANDS ======
room.onPlayerChat = async function (player, message) {
  const msg = message.toLowerCase().trim();

  if (msg === "!replay") {
    if (!player.admin) {
      room.sendAnnouncement("❌ Only admins can use this command.", player.id, 0xff5555, "bold");
      return false;
    }

    if (!lastReplay) {
      room.sendAnnouncement("⚠️ No recent replay to upload.", player.id, 0xffa500, "bold");
      return false;
    }

    room.sendAnnouncement("⏳ Uploading last replay...", player.id, 0xaaaaaa, "bold");
    await uploadReplayManual(player);
    return false;
  }

  return true;
};

// ====== GAME FLOW ======
room.onTeamGoal = function (team) {
  if (team === 1) score.red++;
  else if (team === 2) score.blue++;
};

room.onGameStart = function () {
  gameInProgress = true;
  score = { red: 0, blue: 0 };
  room.startRecording();
};

room.onGameStop = async function () {
  if (!gameInProgress) return;
  gameInProgress = false;
  await handleReplayUpload();
};

room.onGameEnd = async function () {
  if (!gameInProgress) return;
  gameInProgress = false;
  await handleReplayUpload();
};

// ====== UPLOAD HANDLERS ======
async function handleReplayUpload() {
  try {
    const replayFile = room.stopRecording();
    lastReplay = replayFile;

    const formData = new FormData();
    formData.append("replay[name]", `Replay ${new Date().toLocaleString()}`);
    formData.append("replay[private]", "false");
    formData.append("replay[fileContent]", replayFile.toString());

    const upload = await fetch("https://replay.thehax.pl/api/upload", {
      method: "POST",
      headers: {
        "API-Tenant": TENANT_KEY,
        "API-Key": API_KEY,
      },
      body: formData,
    });

    const result = await upload.json();

    if (result.success) {
      room.sendAnnouncement(`📤 Replay uploaded: ${result.url}`);
      await sendDiscordEmbed(result.url);
    } else {
      room.sendAnnouncement("❌ Failed to upload replay to TheHax.");
      console.error(result);
    }
  } catch (err) {
    console.error("Error uploading replay:", err);
  }
}

async function uploadReplayManual(player) {
  try {
    const replayFile = lastReplay;
    const formData = new FormData();
    formData.append("replay[name]", `Manual Replay ${new Date().toLocaleString()}`);
    formData.append("replay[private]", "false");
    formData.append("replay[fileContent]", replayFile.toString());

    const upload = await fetch("https://replay.thehax.pl/api/upload", {
      method: "POST",
      headers: {
        "API-Tenant": TENANT_KEY,
        "API-Key": API_KEY,
      },
      body: formData,
    });

    const result = await upload.json();

    if (result.success) {
      room.sendAnnouncement(`📤 Replay uploaded: ${result.url}`, player.id, 0x00ff00, "bold");
      await sendDiscordEmbed(result.url, true);
    } else {
      room.sendAnnouncement("❌ Manual upload failed.", player.id, 0xff5555, "bold");
      console.error(result);
    }
  } catch (err) {
    console.error("Error uploading replay manually:", err);
  }
}

// ====== DISCORD EMBED ======
async function sendDiscordEmbed(replayUrl, manual = false) {
  const winner =
    score.red > score.blue
      ? "🔴 Red Team"
      : score.blue > score.red
      ? "🔵 Blue Team"
      : "⚪ Draw";

  const embed = {
    username: "Replay Bot by Teleese",
    embeds: [
      {
        title: manual ? "🎮 Manual Replay Upload" : "🏁 Match Finished",
        description:
          `**Final Score:** 🔴 ${score.red} - ${score.blue} 🔵\n` +
          `**Winner:** ${winner}\n\n` +
          `[▶️ Watch Replay on TheHax Replay](${replayUrl})`,
        color:
          score.red > score.blue
            ? 0xff4d4d
            : score.blue > score.red
            ? 0x4d79ff
            : 0xcccccc,
        thumbnail: {
          url: "data:image/jpeg;base64,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"
        },
        footer: {
          text: "Replay Bot • Teleese Labs • " + new Date().toLocaleString(),
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embed),
    });
  } catch (err) {
    console.error("Error sending Discord embed:", err);
  }
}

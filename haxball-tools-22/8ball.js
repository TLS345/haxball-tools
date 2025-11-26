// Day 22/365 - !8ball Command
// By TLS/Teleese

const answers = [
  "Sí.",
  "No.",
  "Tal vez.",
  "Depende.",
  "Ni en pedo.",
  "Probablemente sí.",
  "Probablemente no.",
  "Claramente.",
  "Difícil...",
  "Soñá."
];

function reply(player, text) {
  room.sendAnnouncement(text, player.id, 0x00FFFF, "bold", 1);
}

room.onPlayerChat = function(player, message) {
  const msg = message.trim();

  if (msg.startsWith("!8ball")) {
    const question = msg.slice(6).trim();
    if (!question) {
      reply(player, "🎱 Tenés que hacer una pregunta después de !8ball.");
      return false;
    }
    const answer = answers[Math.floor(Math.random() * answers.length)];
    room.sendAnnouncement(`🎱 ${player.name} pregunta: ${question}`, null, 0xFFFFFF, "normal", 0);
    room.sendAnnouncement(`👉 Respuesta: ${answer}`, null, 0xFFD700, "bold", 0);
    return false;
  }

  return true;
};

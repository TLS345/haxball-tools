// Day 24/365 - Simple Shop Command
// By TLS/Teleese

let players = {};
const items = {
  "1": "(item 1)",
  "2": "(item 2)",
  "3": "(item 3)",
  "4": "(item 4)",
  "5": "(item 5)"
};

function onPlayerJoin(player) {
  players[player.id] = { name: player.name, inventory: [] };
  room.sendChat(`Welcome ${player.name}! Type !shop to open the shop.`);
}

function onPlayerLeave(player) {
  delete players[player.id];
}

function onChat(player, message) {
  if (message === "!shop") {
    room.sendChat(`🛒 ${player.name}, available items:`);
    for (let [key, item] of Object.entries(items))
      room.sendChat(`${key}. ${item}`);
    room.sendChat(`Use !buy <number> to get one.`);
    return false;
  }

  if (message.startsWith("!buy")) {
    const id = message.split(" ")[1];
    if (!items[id]) return room.sendChat("❌ Invalid item.");
    players[player.id].inventory.push(items[id]);
    room.sendChat(`✅ ${player.name} bought ${items[id]}!`);
    return false;
  }
}

// Day 33 - Coin Flip 
// By TLS / Teleese

room.onPlayerChat = (player, message) => {
  if (message === "!coin") {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    room.sendChat(`${player.name} flipped a coin: ${result}!`);
    return false; 
  }
};

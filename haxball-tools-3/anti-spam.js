/*
  Anti-Spam Tool for Haxball
  By TLS
*/

let spamTracker = {}; 
const SPAM_LIMIT = 4; // max messages allowed in interval
const INTERVAL = 5000; // 5 seconds
const MUTE_TIME = 60000; // 1 minute

room.onPlayerChat = function(player, message) {
  let now = Date.now();

  // initialize if not exists
  if (!spamTracker[player.id]) {
    spamTracker[player.id] = { count: 0, last: now, mutedUntil: 0 };
  }

  let user = spamTracker[player.id];

  // check if muted
  if (now < user.mutedUntil) {
    return false; // block chat
  }

  // reset counter if interval passed
  if (now - user.last > INTERVAL) {
    user.count = 0;
  }

  user.count++;
  user.last = now;

  // mute if spam limit reached
  if (user.count >= SPAM_LIMIT) {
    user.mutedUntil = now + MUTE_TIME;
    room.sendAnnouncement(
      `${player.name} has been muted for spamming.`,
      null,
      0xFF0000,
      "bold",
      2
    );
    return false; // block current spam message
  }

  return true; // allow chat
};

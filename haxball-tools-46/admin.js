// Day 46-365
// By TLS/Teleese

const crypto = window.crypto || self.crypto;

function hexEncode(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha256Hex(text) {
  const enc = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', enc);
  return hexEncode(new Uint8Array(hash));
}

let adminPassPlain = localStorage.getItem('hb_adminPass') || null;
let adminPassHash = null;

if (!adminPassPlain) {
  const rand = crypto.getRandomValues(new Uint8Array(16));
  adminPassPlain = hexEncode(rand);
  try { localStorage.setItem('hb_adminPass', adminPassPlain); } catch(e){}
}

(async () => {
  adminPassHash = await sha256Hex(adminPassPlain);
})();

let admins = new Set();

room.onRoomLink = function(link) {
  console.log("Room created:", link);
  console.log("Admin password:", adminPassPlain);
  room.sendAnnouncement("Room ready!", null, 0x00FF00, "bold", 2);
};

function updateAdmins() {
  const players = room.getPlayerList();
  if (players.length === 0) return;
  const hasAdmin = players.some(p => p.admin);
  if (!hasAdmin) room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerJoin = function(player) {
  updateAdmins();
};

room.onPlayerLeave = function(player) {
  admins.delete(player.id);
  updateAdmins();
};

room.onPlayerChat = function(player, message) {
  (async () => {
    if (!message) return;
    const parts = message.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();

    if (cmd === '!admin') {
      const pass = parts[1] || '';
      if (!pass) {
        room.sendAnnouncement("Usage: !admin [password]", player.id, 0xFF5555, "bold", 2);
        return;
      }
      const h = await sha256Hex(pass);
      if (h === adminPassHash) {
        room.setPlayerAdmin(player.id, true);
        admins.add(player.id);
        room.sendAnnouncement(`${player.name} is now admin.`, null, 0x00FF00, "bold", 2);
      } else {
        room.sendAnnouncement("Incorrect password.", player.id, 0xFF0000, "bold", 2);
      }
      return;
    }

    if (cmd === '!changepass') {
      if (!player.admin) {
        room.sendAnnouncement("Only admins can change the password.", player.id, 0xFF5555, "bold", 2);
        return;
      }
      if (parts.length < 3) {
        room.sendAnnouncement("Usage: !changepass [current] [new]", player.id, 0xFF5555, "bold", 2);
        return;
      }
      const current = parts[1];
      const neo = parts.slice(2).join(' ');
      const currentHash = await sha256Hex(current);
      if (currentHash !== adminPassHash) {
        room.sendAnnouncement("Current password incorrect.", player.id, 0xFF0000, "bold", 2);
        return;
      }
      adminPassPlain = neo;
      adminPassHash = await sha256Hex(adminPassPlain);
      try { localStorage.setItem('hb_adminPass', adminPassPlain); } catch(e){}
      room.sendAnnouncement("Password changed successfully.", player.id, 0x00FF00, "bold", 2);
      console.log("New admin password:", adminPassPlain);
      return;
    }
  })();
  return false;
};

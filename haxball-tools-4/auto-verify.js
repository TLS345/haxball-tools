/*
  Auto-verify (captcha-lite) for Haxball
  By TLS
*/

const VERIFY_TIMEOUT = 15000;   // ms to answer the captcha (default 15s)
const CODE_LENGTH = 4;          // digits in the captcha code
const SUSPICION_RULES = {       // rules
  minNameLength: 3,             // names shorter than this are suspicious
  weirdCharRatio: 0.5,          
  maxJoinsPerMinute: 6,         // many joins in short time = suspicious
  maxPerIP: 3                   // many accounts from same IP = suspicious
};
const WHITELIST = ["AdminNick1", "AdminNick2"];
const fancyFont = "font-family: monospace; color: #00ffff; font-weight: bold;";

const pending = new Map(); 
const recentJoins = [];    
const ipCounts = new Map();

function now() { return Date.now(); }
function randDigits(n) {
  let s = "";
  for (let i = 0; i < n; i++) s += Math.floor(Math.random() * 10);
  return s;
}
function cleanName(name) {
  return (name || "").trim();
}
function weirdCharFraction(name) {
  if (!name || name.length === 0) return 0;
  let weird = 0;
  for (let ch of name) {
    if (!/[a-zA-Z0-9]/.test(ch)) weird++;
  }
  return weird / name.length;
}
function pruneJoinsWindow(ms = 60000) {
  const cutoff = now() - ms;
  while (recentJoins.length && recentJoins[0] < cutoff) recentJoins.shift();
}
function incIp(ip) {
  ipCounts.set(ip, (ipCounts.get(ip) || 0) + 1);
}
function decIp(ip) {
  if (!ipCounts.has(ip)) return;
  const v = ipCounts.get(ip) - 1;
  if (v <= 0) ipCounts.delete(ip);
  else ipCounts.set(ip, v);
}

function isSuspicious(player) {
  try {
    const name = cleanName(player.name);
    if (WHITELIST.includes(name)) return false;

    if ((name.length || 0) < SUSPICION_RULES.minNameLength) return true;

    if (weirdCharFraction(name) >= SUSPICION_RULES.weirdCharRatio) return true;

    pruneJoinsWindow(60000);
    if (recentJoins.length >= SUSPICION_RULES.maxJoinsPerMinute) return true;

    const ip = player.conn || "unknown";
    if ((ipCounts.get(ip) || 0) >= SUSPICION_RULES.maxPerIP) return true;

    return false;
  } catch (e) {
    console.warn("%cError in isSuspicious:", fancyFont, e);
    return false;
  }
}

function startVerification(player) {
  const code = randDigits(CODE_LENGTH);
  const expiresAt = now() + VERIFY_TIMEOUT;
  pending.set(player.id, { code, expiresAt, ip: player.conn, name: player.name });

  room.sendAnnouncement(
    `Verification code: ${code} — reply in chat to verify (you have ${Math.round(VERIFY_TIMEOUT/1000)}s)`,
    player.id,
    0xFF00FF,
    "bold",
    2
  );

  console.log(`%c[VERIFY] Sent code to ${player.name} (id:${player.id}) — By TLS`, fancyFont);
}

function flushExpiredPending() {
  const t = now();
  for (const [pid, data] of Array.from(pending.entries())) {
    if (data.expiresAt <= t) {
      try {
        room.kickPlayer(pid, "Verification failed (timeout). By TLS", false);
        console.log(`%c[VERIFY-FAIL] ${data.name} (id:${pid}) timed out — By TLS`, fancyFont);
      } catch (e) {
        console.warn("%cError kicking timed out player:", fancyFont, e);
      } finally {
        pending.delete(pid);
        if (data.ip) decIp(data.ip);
      }
    }
  }
}

room.onPlayerJoin = function(player) {
  try {
    recentJoins.push(now());

    const ip = player.conn || "unknown";
    incIp(ip);

    if (isSuspicious(player)) {
      startVerification(player);
    } else {
      console.log(`%c[JOIN] ${player.name} looks ok — By TLS`, fancyFont);
    }
  } catch (e) {
    console.warn("%cError in onPlayerJoin:", fancyFont, e);
  }
};


room.onPlayerChat = function(player, message) {
  try {
    const pid = player.id;
    if (!pending.has(pid)) return true; 

    const data = pending.get(pid);
    const trimmed = (message || "").trim();

    if (trimmed === data.code) {
      pending.delete(pid);
      room.sendAnnouncement(`Thanks ${player.name}, you're verified — welcome!`, player.id, 0x00FF00, "bold", 1);
      console.log(`%c[VERIFY-OK] ${player.name} verified — By TLS`, fancyFont);
      return false; 
    } else {
      room.sendAnnouncement(`Wrong code. Please reply with the code you received.`, player.id, 0xFFAA00, "bold", 1);
      console.log(`%c[VERIFY-WRONG] ${player.name} sent incorrect code — By TLS`, fancyFont);
      return false; 
    }
  } catch (e) {
    console.warn("%cError in onPlayerChat:", fancyFont, e);
    return true;
  }
};

room.onPlayerLeave = function(playerId, byPlayer) {
  try {
    if (pending.has(playerId)) pending.delete(playerId);

    console.log(`%c[LEAVE] player id:${playerId} left — By TLS`, fancyFont);
  } catch (e) {
    console.warn("%cError in onPlayerLeave:", fancyFont, e);
  }
};

setInterval(flushExpiredPending, 1000);

room.onRoomLink = function() {
  console.log("%cAuto-Verify active — By TLS", fancyFont);
};

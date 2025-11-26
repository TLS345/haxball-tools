// anti-multiaccount.js
// Day 2/60 — Anti-Multiaccount (logs + stats)
// By TLS / Teleese

const MAX_PER_IP = 2;
const WHITELIST = ["AdminNick", "Teleese"];
const fancyFont = "font-family: monospace; color: #00ffff; font-weight: bold;";

const ipMap = new Map();        
const ipKicks = new Map();      
const events = [];              

// helpers
function addPlayerIp(ip, playerId) {
  if (!ipMap.has(ip)) ipMap.set(ip, new Set());
  ipMap.get(ip).add(playerId);
}

function removePlayerIp(ip, playerId) {
  if (!ipMap.has(ip)) return;
  const s = ipMap.get(ip);
  s.delete(playerId);
  if (s.size === 0) ipMap.delete(ip);
}

function countIp(ip) {
  return ipMap.has(ip) ? ipMap.get(ip).size : 0;
}

function recordEvent(obj) {
  events.push({ ts: Date.now(), ...obj });
}

function incrementKick(ip) {
  ipKicks.set(ip, (ipKicks.get(ip) || 0) + 1);
}

// core
room.onPlayerJoin = (player) => {
  try {
    const ip = player.conn || "unknown";
    const name = player.name || "";

    if (WHITELIST.includes(name)) {
      console.log(`%c[WHITELIST] ${name} joined (IP: ${ip}) — By TLS/Teleese`, fancyFont);
      addPlayerIp(ip, player.id);
      recordEvent({ type: "join", name, ip, note: "whitelist" });
      return;
    }

    const current = countIp(ip);
    addPlayerIp(ip, player.id);
    const nowCount = current + 1;

    console.log(`%c[JOIN] ${name} (IP: ${ip}) now ${nowCount}/${MAX_PER_IP} — By TLS/Teleese`, fancyFont);
    recordEvent({ type: "join", name, ip, countAfter: nowCount });

    if (nowCount > MAX_PER_IP) {
      room.kickPlayer(player.id, "Multiple accounts detected. By TLS/Teleese", false);
      incrementKick(ip);
      recordEvent({ type: "kick", name, ip, reason: "multiaccount" });
      // cleanup
      removePlayerIp(ip, player.id);
      console.log(`%c[KICK] ${name} (IP: ${ip}) kicked — total kicks from IP: ${ipKicks.get(ip)} — By TLS/Teleese`, fancyFont);
    }
  } catch (e) {
    console.warn("%cError in onPlayerJoin:", fancyFont, e);
  }
};

room.onPlayerLeave = (playerId, byPlayer) => {
  try {
    for (const [ip, setIds] of ipMap.entries()) {
      if (setIds.has(playerId)) {
        setIds.delete(playerId);
        if (setIds.size === 0) ipMap.delete(ip);
        console.log(`%c[LEAVE] Player ${playerId} removed from IP ${ip} — By TLS/Teleese`, fancyFont);
        recordEvent({ type: "leave", playerId, ip });
        break;
      }
    }
  } catch (e) {
    console.warn("%cError in onPlayerLeave:", fancyFont, e);
  }
};

// dumps 
function dumpStats() {
  try {
    const now = new Date().toISOString();
    console.log(`%c=== Multiaccount Stats Dump @ ${now} — By TLS/Teleese ===`, fancyFont);

    const currentList = Array.from(ipMap.entries()).map(([ip, setIds]) => ({
      ip,
      connections: setIds.size,
      players: Array.from(setIds)
    })).sort((a,b) => b.connections - a.connections);

    console.log("%cCurrent connections (top):", fancyFont);
    console.log(currentList.slice(0, 20));

    const kicksList = Array.from(ipKicks.entries()).map(([ip, kicks]) => ({ ip, kicks }))
      .sort((a,b) => b.kicks - a.kicks);

    console.log("%cKicks by IP (top):", fancyFont);
    console.log(kicksList.slice(0, 20));

    console.log("%cRecent events (last 20):", fancyFont);
    console.log(events.slice(-20));

    console.log("%c=== End Stats Dump ===", fancyFont);
  } catch (e) {
    console.warn("%cError in dumpStats:", fancyFont, e);
  }
}

function resetStats() {
  ipMap.clear();
  ipKicks.clear();
  events.length = 0;
  console.log("%cStats reset — By TLS/Teleese", fancyFont);
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.

}

function showConfig() {
  console.log(`%cConfig: MAX_PER_IP=${MAX_PER_IP}, WHITELIST=${JSON.stringify(WHITELIST)}`, fancyFont);
}

globalThis.dumpMultiStats = dumpStats;
globalThis.resetMultiStats = resetStats;
globalThis.showMultiConfig = showConfig;

room.onRoomLink = () => {
  console.log("%cAnti-Multiaccount active – By TLS/Teleese", fancyFont);
  showConfig();
};

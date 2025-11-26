const VPN_API_KEY = "YOUR_API_KEY_HERE";
const VPN_API_URL = `https://ipqualityscore.com/api/json/ip/${VPN_API_KEY}`;
const fancyFont = "font-family: monospace; color: #00ffff; font-weight: bold;";

async function checkVPN(ip) {
  try {
    const res = await fetch(`${VPN_API_URL}/${ip}`);
    const data = await res.json();
    return data.vpn === true;
  } catch (e) {
    console.warn("%cVPN check failed, letting player through:", fancyFont, e);
    return false;
  }
}

room.onPlayerJoin = async (player) => {
  const ip = player.conn;
  const vpnDetected = await checkVPN(ip);

  if (vpnDetected) {
    room.kickPlayer(player.id, "VPN detected. By TLS/Teleese", false);
    console.log(`%cKicked ${player.name} for using VPN – By TLS/Teleese`, fancyFont);
  } else {
    console.log(`%c${player.name} joined the room – By TLS/Teleese`, fancyFont);
  }
};

room.onRoomLink = () => {
  console.log("%cAnti-VPN active – By TLS/Teleese", fancyFont);
};

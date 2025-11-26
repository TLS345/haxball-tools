# 🎮 Haxball Tools – Day 1/60

Welcome to **Day 1 of my 2 months GitHub challenge**! 🚀  
Every day I’ll release a new Haxball tool. This first one is a **simple Anti-VPN script** to automatically kick VPN users from your rooms. 🛡️

---

## ⚡ Features

- 🕵️ Detects VPN users using **IPQualityScore API**
- ❌ Kicks players instantly if VPN is detected
- 💻 Logs info in console with a **fancy style**
- ✨ Marks every action with **By TLS / Teleese**

---

## 🛠 Installation

1. Copy `anti-vpn.js` into your Haxball room script.
2. Add your **API Key** in the `VPN_API_KEY` variable 🔑
3. Launch your room. Players with VPNs will be kicked automatically.
4. Check your console for logs, styled with a custom font 🖌️

---

## 📌 Example

```javascript
// Anti-VPN Haxball – Day 1/365
// By TLS / Teleese
room.onPlayerJoin = async (player) => {
  const vpnDetected = await checkVPN(player.conn);
  if (vpnDetected) {
    room.kickPlayer(player.id, "VPN detected. By TLS/Teleese", false);
    console.log(`Kicked ${player.name} for VPN – By TLS/Teleese`);
  }
};

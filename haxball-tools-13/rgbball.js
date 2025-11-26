// RGB Ball – Day 13/365
// By TLS / Teleese

let rgbEnabled = false;
let hue = 0;
let smoothStep = 0.7; // Change this shit if u wanna more smooth or less

function hsvToRgb(h, s, v) {
  let r, g, b, i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  return { r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255) };
}

room.onPlayerChat = (player, message) => {
  const msg = message.toLowerCase();
  if (msg === "!rgbball") {
    rgbEnabled = !rgbEnabled;
    room.sendAnnouncement(
      rgbEnabled ? "RGB Ball ENABLE" : "RGB Ball DISABLED",
      null,
      0xFFFFFF,
      "bold",
      2
    );
    return false;
  }
  return true;
};

room.onGameTick = () => {
  if (!rgbEnabled) return;
  hue = (hue + smoothStep) % 360;
  const color = hsvToRgb(hue / 360, 1, 1);
  const hex = (color.r << 16) | (color.g << 8) | color.b;
  room.setDiscProperties(0, { color: hex });
};

room.startGame();

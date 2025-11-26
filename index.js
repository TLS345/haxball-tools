const { Room } = API = require("node-haxball")();

const TOKEN = ""; // Haxball.com/headlesstoken

Room.create({ // u can change all this shit 
  name: "Generic Name",
  maxPlayerCount: 10,
  public: true,
  geo: { lat: -34.6, lon: -58.4, flag: "ar" }, 
  token: TOKEN,
}, {
  storage: { player_name: "Generic Bot Name" },

  onOpen: (room) => {
    room.onAfterRoomLink = (link) =>
      console.log(`🌐 Room link: {link}`);


      // Color Ball :) Just visual 
     let lastTouchTime = 0;
    const COOLDOWN = 300; // Fast = Less Slow = More :) 


    const varyColor = (baseColor, intensity) => {
      let r = (baseColor >> 16) & 0xff;
      let g = (baseColor >> 8) & 0xff;
      let b = baseColor & 0xff;

      r = Math.min(255, r * intensity);
      g = Math.min(255, g * intensity);
      b = Math.min(255, b * intensity);

      return (Math.floor(r) << 16) + (Math.floor(g) << 8) + Math.floor(b);
    };

    const getDynamicColor = (teamId) => {
      const intensity = 0.6 + Math.random() * 0.4; 
      if (teamId === 1) return varyColor(0xff0000, intensity); 
      if (teamId === 2) return varyColor(0x0066ff, intensity); 
      return 0xcccccc;
    };

    try { room.setDiscProperties(0, { color: 0xcccccc }); } catch (e) {}


    // The important shit detection 
    room.onCollisionDiscVsDisc = (discId1, discPlayerId1, discId2, discPlayerId2) => {
      const now = Date.now();
      if (now - lastTouchTime < COOLDOWN) return;
      lastTouchTime = now;

      let playerId = null;
      if (discId1 === 0 && discPlayerId2 != null) playerId = discPlayerId2;
      else if (discId2 === 0 && discPlayerId1 != null) playerId = discPlayerId1;
      if (!playerId) return;

      const player = room.getPlayer(playerId);
      if (!player) return;

      const teamId = typeof player.team === "number" ? player.team : player.team?.id;
      if (!teamId) return;

      const ballColor = getDynamicColor(teamId);
      try { room.setDiscProperties(0, { color: ballColor }); } catch (e) {}

      console.log(`⚽ Ball touched by: ${player.name} (${teamId === 1 ? "🔴" : "🔵"}) color=#${ballColor.toString(16).padStart(6, "0")}`);
    };
  },

  onClose: () => process.exit(0)
});

const HaxballJS = require("haxball.js");

let room = null;

async function startRoom() {
  console.log("🚀 Starting room...");

  return HaxballJS().then((HBInit) => {
    room = HBInit({
      roomName: "Base Room",
      maxPlayers: 16,
      public: true,
      noPlayer: true,
      token: "" // Put your Headless Haxball Token here: haxball.com/headlesstoken
    });

    console.log("🏟️ Room started successfully.");

    room.onPlayerJoin = (player) => {
      room.sendAnnouncement(`Welcome ${player.name}`, player.id, 0x00FF00);
    };

    return room;
  });
}

async function stopRoom() {
  if (room) {
    console.log("🛑 Closing room...");
    room = null;
  }
}

async function rebootRoom() {
  await stopRoom();
  await startRoom();
}

module.exports = {
  startRoom,
  rebootRoom
};

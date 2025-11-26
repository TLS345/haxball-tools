//Day 47-365
// By Teleese/ TLS

const API = require("node-haxball")();

const { Utils, Room, Language } = API;
const EnglishLanguage = require("../languages/englishLanguage");

Language.current = new EnglishLanguage(API);

const ROOM_ID = "oBtrSGQaMjo";
const BOT_NAME = "ElPatoBuffo🦆";
const BOT_AVATAR = "🦆";

(async () => {
  try {
    console.log("🔑 Generating auth...");
    const [authKey, authObj] = await Utils.generateAuth();

    console.log("🔁 Fetching valid token...");
    const { token } = await Utils.refreshRoomToken({ rcr: "" });

    console.log("🚀 Joining the room...");

    Room.join(
      {
        id: ROOM_ID,
        token,
        authObj,
      },
      {
        storage: {
          player_name: BOT_NAME,
          avatar: BOT_AVATAR,
          player_auth_key: authKey,
        },
        
        onOpen: (room) => {
          console.log(`✅ Joined the room as ${BOT_NAME} ${BOT_AVATAR}`);
          room.sendChat("🤖 Bot made by Teleese");
        },
        
        onClose: (msg) => {
          console.log("⚠️ Bot disconnected:", msg?.toString?.() || msg);
        },
      }
    );
  } catch (err) {
    console.error("❌ Connection error:", err);
  }
})();

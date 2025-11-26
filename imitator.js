module.exports = function (e) {
  const i = e.VariableType,
        l = e.AllowFlags,
        Plugin = e.Plugin;

  Object.setPrototypeOf(this, Plugin.prototype);

  Plugin.call(this, "imitator", true, {
    version: "1.0",
    author: "abc - edited Teleese",
    description: "Hace que el propio bot imite a otro jugador ",
    allowFlags: l.CreateRoom | l.JoinRoom,
  });

  this.defineVariable({
    name: "imitatePlayerId",
    description: "ID del jugador a imitar.",
    type: i.PlayerId,
    value: 0, // Put ID OF player 
  });

  const u = this;

  this.initialize = function () {
  };

  this.onPlayerInputChange = function (id, input) {
    if (id === u.imitatePlayerId) {
      u.room.setKeyState(input);
    }
  };

  this.onPlayerAvatarChange = function (id, avatar) {
    if (id === u.imitatePlayerId) {
      u.room.setAvatar(avatar);
    }
  };

  this.onPlayerChatIndicatorChange = function (id, active) {
    if (id === u.imitatePlayerId) {
      u.room.setChatIndicatorActive(active);
    }
  };

  this.onPlayerChat = function (id, msg) {
    if (id === u.imitatePlayerId) {
      u.room.sendChat(msg);
    }
  };

  this.onPlayerTeamChange = function (id, team, byId) {
    if (id === u.imitatePlayerId && byId !== u.room.currentPlayerId) {
      u.room.setPlayerTeam(u.room.currentPlayerId, team);
    }
  };

  this.onPlayerLeave = function (player) {
    if (player.id === u.imitatePlayerId) {
      console.log("⚠️ El jugador que imitabas se fue de la sala.");
    }
  };
};

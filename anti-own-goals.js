/*
  Anti-Own Goals (auto-kick) for Haxball
  By TLS
*/

const MAX_OWN_GOALS = 3; // how many own goals allowed before auto-kick
const fancyFont = "font-family: monospace; color: #ff4444; font-weight: bold;";

const ownGoals = new Map(); 

function resetOwnGoals() {
  ownGoals.clear();
  console.log("%c[RESET] Own goals counters cleared — By TLS", fancyFont);
}

room.onTeamGoal = function(team) {
  try {
    const scores = room.getScores();
    const lastTouch = scores?.lastTouchTeam;
    const goalScorer = scores?.goalScorer;

    if (!goalScorer) return;

    const player = room.getPlayer(goalScorer.id);
    if (!player) return;

    // own goal check
    if (team !== lastTouch) {
      // increase counter
      const count = (ownGoals.get(player.id) || 0) + 1;
      ownGoals.set(player.id, count);

      if (count < MAX_OWN_GOALS) {
        room.sendAnnouncement(
          `⚠️ ${player.name} scored an own goal (${count}/${MAX_OWN_GOALS})`,
          null,
          0xFFAA00,
          "bold",
          2
        );
        console.log(
          `%c[OWN GOAL] ${player.name} (${count}/${MAX_OWN_GOALS}) — By TLS`,
          fancyFont
        );
      } else {
        // kick player
        room.kickPlayer(
          player.id,
          `Kicked: too many own goals (By TLS)`,
          false
        );
        console.log(
          `%c[KICKED] ${player.name} reached ${MAX_OWN_GOALS} own goals — By TLS`,
          fancyFont
        );
      }
    }
  } catch (e) {
    console.warn("%cError in onTeamGoal:", fancyFont, e);
  }
};

// reset counters when match stops
room.onTeamVictory = function(scores) {
  resetOwnGoals();
};

// reset when game stops
room.onGameStop = function(byPlayer) {
  resetOwnGoals();
};

// cleanup when player leaves
room.onPlayerLeave = function(player) {
  if (ownGoals.has(player.id)) ownGoals.delete(player.id);
};

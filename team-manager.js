/* ============================================================
                 HAXBALL TOOLS  |  DAY 42 - 60 
          Includes Choose Mode + Auto Balance + Map Switching
                    Author: Teleese/ TLS
   ============================================================ */

let players = [];
let teamR = [];
let teamB = [];
let teamS = [];

let inChooseMode = false;
let capLeft = false;
let streak = 0;
let timeOutCap;

const maxTeamSize = 3;
const chooseTime = 10;

const classicMap = "Classic Map";
const bigMap = "Big Map";
const aloneMap = "1v1 Map";

const scoreLimitClassic = 3;
const timeLimitClassic = 3;
const scoreLimitBig = 5;
const timeLimitBig = 5;

function updateTeams() {
    teamR = players.filter(p => p.team === 1);
    teamB = players.filter(p => p.team === 2);
    teamS = players.filter(p => p.team === 0);
}

function loadMap(map, scoreLimit, timeLimit) {
    room.stopGame();
    room.setCustomStadium(map);
    room.setScoreLimit(scoreLimit);
    room.setTimeLimit(timeLimit);
    room.startGame();
}

function quickRestart() {
    room.stopGame();
    room.startGame();
}

function endGame(winnerTeam) {
    room.sendChat(`🏆 Team ${winnerTeam === 1 ? "Red" : "Blue"} wins!`);
    streak++;
}

function activateChooseMode() {
    inChooseMode = true;
    room.sendChat("⚙️ Choose mode activated.");
    choosePlayer();
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    room.sendChat("✅ Choose mode deactivated.");
}

function resumeGame() {
    room.startGame();
}

function topBtn() {
}

function updateRoleOnPlayerIn() {
    updateTeams();

    const total = teamR.length + teamB.length + teamS.length;

    if (total === 1) {
        loadMap(aloneMap, 0, 0);
        room.setPlayerTeam(players[0].id, 1);
    } else if (total <= 6) {
        loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
    } else {
        loadMap(bigMap, scoreLimitBig, timeLimitBig);
    }

    if (inChooseMode) {
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }

    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();

    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
        }
        if (teamR.length === 0 || teamB.length === 0) {
            const cap = teamS[0];
            if (cap) {
                room.setPlayerTeam(cap.id, teamR.length === 0 ? 1 : 2);
            }
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }

    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length === 1 && teamR.length === 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
            room.setPlayerTeam(players[0].id, 1);
        }
        else if (Math.abs(teamR.length - teamB.length) === teamS.length && teamS.length > 0) {
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length === 2) {
                quickRestart();
                loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
            }
            if (teamR.length > teamB.length) {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, 2);
                }
            } else {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, 1);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length === 1) {
                quickRestart();
                loadMap(aloneMap, 0, 0);
                room.setPlayerTeam(players[0].id, 1);
                return;
            } else if (players.length === 5) {
                quickRestart();
                loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
            }

            if (teamR.length > teamB.length) {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, 0);
                }
            } else {
                for (let i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, 0);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length !== teamB.length) {
            room.pauseGame(true);
            activateChooseMode();
        }
        else if (teamS.length >= 2 && teamR.length === teamB.length && teamR.length < maxTeamSize) {
            if (teamR.length === 2) {
                quickRestart();
                loadMap(bigMap, scoreLimitBig, timeLimitBig);
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length !== 0) {
        room.sendChat("[PV] To choose a player, type their number from the list or use 'top', 'random' or 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(function (player) {
            room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left!", player.id);
            timeOutCap = setTimeout(function (player) {
                room.kickPlayer(player.id, "You didn’t choose in time!", false);
            }, chooseTime * 500, teamR[0]);
        }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length !== 0) {
        room.sendChat("[PV] To choose a player, type their number from the list or use 'top', 'random' or 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) {
            room.sendChat("[PV] Hurry up @" + player.name + ", only " + Number.parseInt(chooseTime / 2) + " seconds left!", player.id);
            timeOutCap = setTimeout(function (player) {
                room.kickPlayer(player.id, "You didn’t choose in time!", false);
            }, chooseTime * 500, teamB[0]);
        }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length !== 0 && teamB.length !== 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    let msg = "[PV] Players: ";
    for (let i = 0; i < teamS.length; i++) {
        if (140 - msg.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(msg, player.id);
            msg = "... ";
        }
        msg += teamS[i].name + "[" + (i + 1) + "], ";
    }
    msg = msg.substring(0, msg.length - 2) + ".";
    room.sendChat(msg, player.id);
}

room.onPlayerChat = function (player, message) {
    if (message === "!chooseon") {
        activateChooseMode();
        return false;
    }
    if (message === "!chooseoff") {
        deactivateChooseMode();
        return false;
    }
};

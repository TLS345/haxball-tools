// Day 31/60 - Ball Possession Tracker
// By Teleese/TLS

var Rposs = 0;
var Bposs = 0;
var activePlay = false;
var lastTeamTouched = 0;
var interval = null;

function pointDistance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function getLastTouchOfTheBall() {
    const ball = room.getBallPosition();
    const players = room.getPlayerList();

    for (const p of players) {
        if (!p.position) continue;
        const distance = pointDistance(p.position, ball);
        if (distance < 22) { // 22px proximity threshold
            lastTeamTouched = p.team;
            activePlay = true;
            break;
        }
    }
}

function updatePossession() {
    if (!activePlay) return;
    if (lastTeamTouched === 1) Rposs++;
    else if (lastTeamTouched === 2) Bposs++;
}

function announcePossession() {
    const total = Rposs + Bposs || 1;
    const redPerc = ((Rposs / total) * 100).toFixed(1);
    const bluePerc = ((Bposs / total) * 100).toFixed(1);

    room.sendAnnouncement(
        `⭐ Posesión del balón : 🔴 ${redPerc}%  |  🔵 ${bluePerc}%`,
        null,
        0xEDC021,
        "bold"
    );
}

function startPossessionLoop() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        getLastTouchOfTheBall();
        updatePossession();
    }, 100);
}

function stopPossessionLoop() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

room.onGameStart = function () {
    Rposs = 0;
    Bposs = 0;
    activePlay = false;
    lastTeamTouched = 0;
    startPossessionLoop();
};

room.onGameStop = function () {
    stopPossessionLoop();
    announcePossession();
};

room.onGamePause = stopPossessionLoop;
room.onGameUnpause = startPossessionLoop;

room.onPlayerBallKick = function (player) {
    lastTeamTouched = player.team;
    activePlay = true;
};

// =====================================================
// ⚽ Day 35/365 – "Jabulani" Curve Shot 
// Author: TLS / Teleese 
// =====================================================

const BALL_INDEX = 0;
let CURVE_FORCE = 0.35; // default curve strength , change to get more or less :) 
const CURVE_DURATION = 70;
const activeCurves = [];

room.onGameTick = () => {
    const ball = room.getDiscProperties(BALL_INDEX);
    if (!ball) return;

    for (let i = activeCurves.length - 1; i >= 0; i--) {
        const curve = activeCurves[i];
        curve.life--;

        const t = (curve.maxLife - curve.life) / curve.maxLife;
        const curvePower = Math.sin(t * Math.PI) * curve.spin * CURVE_FORCE;

        const perpAngle = curve.angle + Math.PI / 2;
        const ax = Math.cos(perpAngle) * curvePower;
        const ay = Math.sin(perpAngle) * curvePower;

        const vx = ball.xspeed + ax;
        const vy = ball.yspeed + ay;
        room.setDiscProperties(BALL_INDEX, { xspeed: vx, yspeed: vy });

        const colorPhase = Math.floor(255 * Math.abs(Math.sin(t * Math.PI)));
        const color = (255 << 16) | (colorPhase << 8);
        room.setDiscProperties(BALL_INDEX, { color });

        if (curve.life <= 0) {
            activeCurves.splice(i, 1);
            room.setDiscProperties(BALL_INDEX, { color: 0xffffff });
        }
    }
};

room.onPlayerBallKick = (player) => {
    const ball = room.getDiscProperties(BALL_INDEX);
    if (!ball) return;

    const angle = Math.atan2(ball.yspeed, ball.xspeed);
    const spin = Math.random() < 0.5 ? -1 : 1;

    activeCurves.push({
        angle,
        spin,
        life: CURVE_DURATION,
        maxLife: CURVE_DURATION
    });

    room.sendAnnouncement(`🌀 ${player.name} kicked a curved shot ${spin > 0 ? "→ right" : "← left"}!`);
};

room.onPlayerChat = (player, message) => {
    const args = message.split(" ");
    const cmd = args[0].toLowerCase();

    if (cmd === "!power") {
        if (!player.admin) {
            room.sendAnnouncement("❌ Only admins can change the curve strength.", player.id);
            return false;
        }

        const val = parseFloat(args[1]);
        if (isNaN(val) || val < 0 || val > 2) {
            room.sendAnnouncement("⚙️ Usage: !power <value between 0.1 and 2.0>", player.id);
            return false;
        }

        CURVE_FORCE = val;
        room.sendAnnouncement(`💨 Curve strength set to: ${CURVE_FORCE.toFixed(2)}`);
        return false;
    }

    return true;
};

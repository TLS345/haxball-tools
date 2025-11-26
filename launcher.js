import { spawn } from "child_process";

let roomProcess = null;

export function startRoom() {
    console.log("🚀 Starting Haxball room...");

    roomProcess = spawn("node", ["server.js"], {
        stdio: "inherit"
    });
}

export function rebootRoom() {
    console.log("♻️ Rebooting room...");

    if (roomProcess) {
        roomProcess.kill();
    }

    roomProcess = spawn("node", ["server.js"], {
        stdio: "inherit"
    });

    console.log("🏟️ Room rebooted successfully.");
}

startRoom();

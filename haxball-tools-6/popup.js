function copyToClipboard(value) {
    navigator.clipboard.writeText(value).then(() => {
        console.log("Copied to clipboard:", value);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}

// --- FakePing ---
const fakePingInput = document.getElementById("fakeping-input");
const fakePingCopyBtn = document.getElementById("fakeping-copy-button");

fakePingCopyBtn.addEventListener("click", () => {
    const value = fakePingInput.value.trim();
    if(value !== "") {
        copyToClipboard(`/fakeping ${value}`);
        alert(`Command copied: /fakeping ${value}`);
    } else {
        alert("Please enter a FakePing value");
    }
});

// --- ChatBubble ---
const chatBubbleSwitch = document.getElementById("chatbubble-switch");
const chatBubbleCopyBtn = document.getElementById("chatbubble-copy-button");

chatBubbleCopyBtn.addEventListener("click", () => {
    const state = chatBubbleSwitch.checked ? "ON" : "OFF";
    copyToClipboard(`/chatbubble ${state}`);
    alert(`Command copied: /chatbubble ${state}`);
});

// --- Auto Admin ---
document.getElementById("autoadmin-on-button").addEventListener("click", () => {
    copyToClipboard("/autoadmin ON");
    alert("Command copied: /autoadmin ON");
});
document.getElementById("autoadmin-off-button").addEventListener("click", () => {
    copyToClipboard("/autoadmin OFF");
    alert("Command copied: /autoadmin OFF");
});
document.getElementById("autoadmin-status-button").addEventListener("click", () => {
    const status = Math.random() > 0.5 ? "ON" : "OFF"; // simulación
    copyToClipboard(`/autoadmin STATUS`);
    alert(`Command copied: /autoadmin STATUS`);
});

// --- Admin Recovery ---
document.getElementById("adminrecovery-on-button").addEventListener("click", () => {
    copyToClipboard("/adminrecovery ON");
    alert("Command copied: /adminrecovery ON");
});
document.getElementById("adminrecovery-off-button").addEventListener("click", () => {
    copyToClipboard("/adminrecovery OFF");
    alert("Command copied: /adminrecovery OFF");
});

// --- Quick Kick ---
const qKickInput = document.getElementById("qkick-input");
document.getElementById("qkick-copy-button").addEventListener("click", () => {
    const player = qKickInput.value.trim();
    if(player !== "") {
        copyToClipboard(`/qkick ${player}`);
        alert(`Command copied: /qkick ${player}`);
    } else {
        alert("Please enter a player name");
    }
});

// --- Room Stats ---
document.getElementById("roomstats-copy-button").addEventListener("click", () => {
    const dummyStats = "Players: 8 | Admins: 2 | Bots: 1"; // ejemplo
    copyToClipboard(`/roomstats ${dummyStats}`);
    alert(`Command copied: /roomstats ${dummyStats}`);
});

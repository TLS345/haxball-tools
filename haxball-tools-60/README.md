# ⚽ Haxball Room Launcher & Auto-Reboot System

This project provides a clean and efficient Node.js-based launcher for running a headless Haxball room.  
It automatically starts your room, handles restarts, and gives you a simple structure to maintain long-term stability on a VPS or local environment.

---

## 🚀 Features

- **Start your Haxball room instantly** with a simple command.  
- **Auto-reboot capability** through a dedicated function.  
- **Fully compatible with headless Haxball rooms**, VPS setups, and background services.  
- **Lightweight and easy to integrate** into larger Haxball automation projects.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/TLS345/haxball-tools-60
cd haxball-tools-60
````

Install dependencies:

```bash
npm install
```

---

## 🔄 Rebooting the Room

You can trigger a reboot programmatically by calling:

```js
rebootRoom();
```

The system will safely kill the previous instance and start a fresh room with inherited I/O.

---

## 🛠️ How It Works

The core functionality uses Node’s `spawn`:

```js
spawn("node", ["server.js"], { stdio: "inherit" });
```

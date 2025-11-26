# Haxball Headless Replay Bot 🎮

A headless Haxball bot that automatically records match replays, uploads them to [TheHax Replay](https://thehax.pl/), and sends a styled Discord embed with the final score.  

Designed for admins who want to manage match replays effortlessly, with optional manual replay uploads using the `!replay` command.

---

## Features

- 🎯 Automatic recording of matches (.hbr2)
- 📤 Automatic upload to TheHax Replay
- 🔔 Sends styled Discord embeds with score, winner, and replay link
- 👑 Only admins can trigger manual uploads via `!replay`
- ⚡ Simple configuration, easy to deploy

---

## Setup

1. Clone this repository:

```bash
git clone https://github.com/TLS345/haxball-tools-26

```
```
Open replaybot.js and fill in your credentials:

const WEBHOOK_URL = "Your Discord Webhook URL";
const TENANT_KEY = "Your TheHax Tenant Key";
const API_KEY = "Your TheHax API Key";

Paste in ur script and Thats all :)
```
---
Usage
---

Admins can use the chat command:

!replay  to manually upload the last replay.

All other recordings are automatically uploaded at the end of each match.


Notes
--
Make sure your Discord Webhook and TheHax API credentials are valid.

This bot was developed by Teleese .

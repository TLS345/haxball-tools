# haxball-tools-30

This is a **Headless HaxBall Bot** designed to track player statistics in real-time. It records:

- Goals
- Assists
- Own Goals

And provides **in-game announcements** for player stats and admin commands.

## Features

- `!stats`: Shows your current goals, assists, and own goals in a neat announcement.
- Proper assist tracking:
  - Only counts assists if the last player to touch the ball belongs to the same team as the scorer.
  - Goals scored for the opposing team do not count as assists.

## Usage

1. Open [HaxBall Headless Host](https://www.haxball.com/headless) in your browser.
2. Open the developer console.
3. Paste the `statsbot.js` in ur script .
4. Your room will be headless, and stats tracking starts automatically.

# Commands
```javascript
!stats	Shows your goals, assists, own goals
```
# Example Announcement

```javascript
✦ Teleese - Goals: 2, Assists: 1

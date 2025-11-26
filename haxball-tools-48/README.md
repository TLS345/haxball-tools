
# ⚽ Haxball Tools 48

## 📖 Description

This Node.js script uses **`node-haxball`** to create a Haxball room with an enhanced **ball touch detection system**.

The script focuses on:

* Detecting **which player touches the ball**.
* Identifying **team membership** (red or blue) at the moment of touch.
* Preventing self-touch double-counts (no “self-elimination” if the last toucher touches again immediately).
* Implementing a **cooldown** to avoid spamming events.
* Changing the **ball color dynamically** according to the team (red or blue) with a smooth intensity variation.

---

## ⚙️ Features

* 🎮 **Ball touch detection**: Detects every player interaction with the ball.
* 🔴🔵 **Team-based color reaction**: Red team touches → red; Blue team touches → blue; brightness changes dynamically.
* ⏱️ **Cooldown protection**: Ensures no multiple triggers for rapid touches.
* 💻 **Headless execution**: Works in console-only environments.

---

## 🧩 How It Works

1. **Room Setup**

   * Creates a public Haxball room with `node-haxball` using your token.
   * Owner automatically receives admin privileges after joining.

2. **Ball Touch Detection**

   * Listens for `onCollisionDiscVsDisc`.
   * Identifies the **player involved** in the collision with the ball (disc ID 0).
   * Ignores touches by the same player in rapid succession to avoid double events.

3. **Dynamic Ball Color**

   * Uses a function to **vary the color intensity** based on team.
   * Red team → shades of red, Blue team → shades of blue.
   * The intensity fluctuates randomly to make the ball visually reactive.

4. **Cooldown**

   * Minimal interval between registered touches (e.g., 300ms) prevents flooding logs or color changes.

---

## 🧠 Technical Details

* **Node.js Library**: `node-haxball`
* **Ball Disc ID**: 0 (default)
* **Team ID Detection**: numeric `1` or `2` or fallback object parsing.
* **Color Calculation**: Base team color × random intensity.
* **Logging**: Reports player name, team, and current color.
* **Room Closure Handling**: Clean exit on room termination.

---

## 🚀 Usage

1. Install `node-haxball`:

   ```bash
   npm install node-haxball
   ```

2. Run the script:

   ```bash
   node index.js
   ```

3. Check console for:

   ```
   🌐 Room link: https://www.haxball.com/play?c=XXXXXXX
   ⚽ Ball touched by: Teleese (team=1) color=#ff4c4c
   ⚽ Ball touched by: Pepe (team=2) color=#3366ff
   ```

4. Share the room link for players to join.

---

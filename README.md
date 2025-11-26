# Simple Haxball Macro

Part of **Day 20/365 Haxball Tools**.

**Simple Haxball Macro** is a lightweight and easy-to-use macro for web games like Haxball. It allows automated key presses with configurable settings from a modern control panel.

## Features

- Modern, clean, and responsive UI panel.
- Configure **Key**, **Mode** (`press` or `hold`), and **Interval** in milliseconds.
- Supports **Spacebar (`Space`)** and any other key.
- **HOLD mode:** spams the key while it is pressed, stops when released.
- **Real-time status indicator:**  
  - 🔴 Macro stopped  
  - 🟡 HOLD mode active  
  - 🟢 PRESS mode active
- Start/Stop toggle button.
- Live updates: changes apply immediately.

## Installation

1. Clone or download the repository.
2. Load the files into Chrome as an **unpacked extension**.
3. Make sure `injected.js` is injected into the game iframe.
4. Use the panel to configure the key, mode, and interval, then press **Start**.

## Usage

1. Open the game in your browser.
2. The panel appears in the bottom-right corner.
3. Configure the **Key**, **Mode**, and **Interval**.
4. Press **Start** to run the macro.
5. In `hold` mode, keep the configured key pressed to spam it; release to stop.
6. Press **Stop** or toggle the button to stop the macro.

## Included Files

- `content_panel.js` → Control panel script.
- `injected.js` → Script injected into the game that handles key spam logic.
- `README.md` → Documentation file.

## Notes

- Designed for educational or testing purposes in controlled environments.
- Using this in competitive games may violate the game rules.

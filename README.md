# haxball-tools-28

This project adds a ** !calladmin command** to your Haxball Headless room. When a player uses `!calladmin [reason]`, it sends a ** embed to a Discord webhook** with all the relevant details.

## Features
- embed with thumbnail, timestamp, and footer.
- Player name, ID, and reason clearly displayed.
- Works fully in Haxball Headless.
- Sends notification instantly to Discord.

## Usage
1. Add the script to your Headless room.
2. Replace the `CONFIG.webhook` with your Discord Webhook URL.
3. Players can call admins by typing:
!calladmin [reason]
4. The bot will announce it in the room and send a Discord Message.

## Preview
Discord embed includes:
- Player Name & ID
- Reason for calling admin
- Timestamp
- Footer and thumbnail for style

# haxball-tools-52

## Features

- `!blackjack` — Starts a Blackjack round and opens a 5-second join window.
- Multi-player support (all joined players get cards).
- Automatic dealing with short delays for realism.
- Player actions:
  - **Hit** (request another card)
  - **Stand** (keep your current hand)
  - **Double Down** (double the bet, 1 more card)
  - **Split** (if the first two cards are equal, creates two hands)
- Dealer AI:
  - Reveals hidden card after all plr moreayers finish
  - Draws until reaching 17 o
- Automatic evaluation of results (win, lose, bust).
- Balance system with basic betting.

## Commands

| Command | Description |
|--------|-------------|
| `!blackjack` | Starts a new Blackjack lobby. |
| `!hit` | Request one more card. |
| `!stand` | End your turn. |
| `!double` | Double your bet and receive one last card. |
| `!split` | Split your hand if possible. |
| `!money` | Check your balance. |
| `!send <player> <amount>` | Send money to another player. |

## Requirements
- Haxball Headless

# ⚽ Haxball Admin Access 🔐

Each time the room starts, it generates a **completely random and nearly impossible-to-guess** admin password and prints it in the host console.  
Perfect for keeping your room safe from abuse without needing external tokens or fixed passwords.

---

## 🚀 Main Features

- 🔐 **Auto-generated admin password** (16 bytes = 32 hex characters, using `crypto.getRandomValues`).
- 🧠 **Login system via chat command**: players can use `!admin [password]` to become admin.
- 🔄 **Automatic admin reassignment**: if the admin leaves, the next player becomes admin automatically.
- 💬 **Command protection**: hides admin commands from public chat.
- ⚙️ **Plug-and-play setup** — works directly on [Haxball Headless Host](https://www.haxball.com/headless).

---

## 🧩 How to Use

1. Copy the script into ur script and paste in:  
   👉 [https://www.haxball.com/headless](https://www.haxball.com/headless)

2. Open the browser console (F12 or right-click → *Inspect* → *Console*).

3. When the room starts, you’ll see something like:

```

✅ Room created: [https://www.haxball.com/play?c=XXXXXXX](https://www.haxball.com/play?c=XXXXXXX)
🔑 Admin password: e4f9a3d4b8c1127f4a90f3e83f6a9b0d

```

4. Join the room and type in chat:
```

!admin e4f9a3d4b8c1127f4a90f3e83f6a9b0d

```

✅ If the password is correct, you’ll immediately become an admin.

---

## 🛡️ Security

- The password is generated **in memory only** — it resets each time the script runs.
- With 32 hex characters (128-bit entropy), it’s **mathematically impossible to brute-force**.
- Error messages reveal no information about the password.

---

## 🧠 How It Works

The script uses the Web Crypto API (`crypto.getRandomValues`) to generate 16 random bytes, converts them to a 32-character hexadecimal string, and stores it in `adminPass`.  

When a player sends the `!admin [password]` command, it compares the given string with the real password.  
If it matches, the player gains admin privileges via `room.setPlayerAdmin()`.

Additionally:
- Admins are tracked in a `Set`.
- If all admins leave, the script automatically promotes the first player in the list.
- The `!admin` command messages are suppressed from public chat to keep things secure.

---

## 🧰 Tech Stack

- **Haxball Headless API**
- **JavaScript (ES6+)**
- **Web Crypto API**

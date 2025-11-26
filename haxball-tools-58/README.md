# Haxball AI Chat Bot (OpenRouter Powered)

A clean, stylish, AI-driven chatbot for Haxball rooms.  
Powered by **OpenRouter** (GPT-4o-mini by default), sending responses directly inside the game chat.

---

## 🚀 Features

- 🔥 **AI Responses via OpenRouter**  
  The bot answers any `!bot <message>` prompt with long, smooth, confident English replies.

- 🛡️ **Anti-Spam Cooldown** *(optional)*  
  Prevents spam or AI overload by rate-limiting requests per player.

- 🧩 **Fully Headless Compatible**  
  Works directly in **https://www.haxball.com/headless** or via Node.js with `HBInit`.

- 🛠️ **Lightweight & Easy to Install**  
  No dependencies except the built-in Headless API and OpenRouter.

---

## 📦 Installation

### **1. Get Your OpenRouter API Key**
Create an account and generate a key:

https://openrouter.ai

Then replace inside the script:

```js
const OPENROUTER_API_KEY = "YOUR_API_KEY_HERE"; // ← change your key here
````

---

## 🕹️ Usage

Inside the game chat:

```
!bot <your question>
```

Example:

```
!bot How do black holes form?
```

The bot will respond with a fully formatted AI answer.

---

## 🧪 Example Output

```
━━━━━━━━━━━━━━━━━━━━
🌐 AI Assistant Response
User: Teleese

Message received:
How do stars explode?

Full Reply:
[Long AI-generated explanation...]
━━━━━━━━━━━━━━━━━━━━
```

---

## 🧰 Compatibility

* ✔️ Haxball Headless Host (browser)
* ✔️ Node.js with `HBInit`
* ✔️ Public or private rooms
* ✔️ Works with any OpenRouter model

---

## 🔧 Customization

You can freely change:

* Announcement colors
* AI model (`gpt-4o-mini`, `deepseek-chat`, etc.)
* Text style
* Cooldown settings
* Permissions (admin-only, VIP-only, etc.)

If you want a **more advanced version**, ask anytime.

---

## ⭐ Support

If you like the project, consider starring the repo 🙌
More updates and features coming soon!

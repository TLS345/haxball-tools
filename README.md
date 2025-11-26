# haxball-tools-55


This script automatically limits the room capacity when no admin is online.
It ensures that a number of slots remain reserved for administrators at all times.

## ✨ Features
- Full room capacity displayed (e.g., 30 players)
- When no admin is connected, the room enforces a lower limit (e.g., 28)
- Non-admin players who join after the limit is reached are automatically kicked
- Custom kick message

## 🔧 Configuration
Edit the list of admin auths in the script:

```js
const ADMIN_AUTHS = ["auth1", "auth2"];
````

Set the capacities:

```js
const MAX_CAPACITY = 30;
const LIMIT_WITHOUT_ADMIN = 28;
```

## 🚀 How it works

1. A player joins the room
2. The script checks if any admin (based on auth) is online
3. If no admin is present and the restricted capacity is exceeded:
   → The new player is kicked automatically
4. When an admin connects, the room automatically allows full capacity again

## 📄 Example Kick Message

```
🥲 The room is full, some slots are reserved for admins 🥲
```

## 📌 Requirements

* Haxball Headless Host (`HBInit`)



Si querés lo adapto directo a tu script actual.
```

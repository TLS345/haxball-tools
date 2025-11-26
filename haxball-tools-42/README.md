#  **Haxball Tools Day 42**

> 🧩 **Advanced Team & Map Management System for Haxball Headless by TLS/Teleese**

Automatically balances teams, switches maps dynamically based on player count, and includes a full **Captain Pick System (Choose Mode)** 
---

## 🚀 **Features**

| Feature                              | Description                                               |
| ------------------------------------ | --------------------------------------------------------- |
| 🧠 **Auto Team Balancing**           | Keeps teams fair after joins or leaves.                   |
| 🗺️ **Dynamic Map Switching**        | Automatically changes maps based on player count.         |
| 🧍‍♂️ **Choose Mode (Captain Pick)** | Allows captains to manually pick players from spectators. |
| ⏱️ **Timeout System**                | Warns or kicks captains who take too long to pick.        |
| ⚙️ **Plug & Play**                   | Works out of the box with any Haxball Headless script.    |
| 💬 **Chat Commands**                 | Control the module directly from chat.                    |

**Chat Commands**

```bash
!chooseon   → Activate Choose Mode  
!chooseoff  → Deactivate Choose Mode
```

---

## 📦 **Installation**

1. Copy the file **`team-manager.js`** into your Haxball project (e.g., next to your main bot script).
2. Ensure your main script already defines:

   ```js
   const room = HBInit({...});
   ```
3. Add the following event hooks in your main script:

   ```js
   room.onPlayerJoin = function (player) {
       players = room.getPlayerList();
       updateRoleOnPlayerIn();
   };

   room.onPlayerLeave = function (player) {
       players = room.getPlayerList();
       updateRoleOnPlayerOut();
   };
   ```

---

## 🕹️ **Usage**

### 🔹 Activate Choose Mode

```
!chooseon
```

Enables the **Captain Pick System** — captains can select players manually from spectators by typing:

* A **number** (player index)
* Keywords like `top`, `bottom`, or `random`

### 🔹 Deactivate Choose Mode

```
!chooseoff
```

Returns to normal **automatic balancing mode**.

---

## ⚙️ **Configuration**

You can tweak key parameters at the top of the module:

| Variable            | Description                           | Default         |
| ------------------- | ------------------------------------- | --------------- |
| `maxTeamSize`       | Maximum players per team              | `3`             |
| `chooseTime`        | Time (in seconds) for captain to pick | `10`            |
| `classicMap`        | Map used for small games              | `"Classic Map"` |
| `bigMap`            | Map used for larger games             | `"Big Map"`     |
| `aloneMap`          | Map used for 1v1 mode                 | `"1v1 Map"`     |
| `scoreLimitClassic` | Score limit for classic map           | `3`             |
| `timeLimitClassic`  | Time limit for classic map            | `3`             |
| `scoreLimitBig`     | Score limit for big map               | `5`             |
| `timeLimitBig`      | Time limit for big map                | `5`             |

💡 *You can replace these maps and values with your own `.hbs` stadiums and match rules.*

---

## 📂 **Example File Structure**

```
haxball-bot/
│
├── core.js                # your main bot script
├── team-manager.js        # this module
└── README.md
```

---

## 🧠 **How It Works**

When a player joins or leaves:

1. `updateTeams()` refreshes team lists.
2. `updateRoleOnPlayerIn()` / `updateRoleOnPlayerOut()` decide if maps or teams need rebalancing.
3. If **Choose Mode** is active:

   * Captains manually pick players.
   * The module enforces timeouts and maintains fair play.

---

## 💬 **Contributions**

Pull requests and suggestions are always welcome!
Feel free to fork, improve, or report bugs via [Issues](../../issues).

---




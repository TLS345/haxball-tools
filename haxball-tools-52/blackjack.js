//Day 52-365
//By TLS/Teleese

/**
 * Blackjack Multiplayer for Haxball Headless
 * - Clean, English, feature-complete around Blackjack gameplay only
 * - Features: lobby, bets, per-player balance, join, animated dealing,
 *   hit/stand/double/split support, dealer logic, payouts (including blackjack 3:2),
 *
 * Paste this file into your Haxball Headless host script and run.
 */


const COLOR = {
  INFO: 0x66CCFF,   
  OK: 0x88FF88,     
  WARN: 0xFFDD66,   
  ERR: 0xFF6666,    
  CASINO: 0xCC66FF 
};

function announce(text, targetId = null, color = COLOR.INFO, style = "bold", sound = 2) {
  try {
    room.sendAnnouncement(text, targetId, color, style, sound);
  } catch (e) {
    room.sendChat(text);
  }
}

function shortAnn(text) { announce(text, null, COLOR.INFO); }
function okAnn(text, targetId = null) { announce(text, targetId, COLOR.OK); }
function warnAnn(text, targetId = null) { announce(text, targetId, COLOR.WARN); }
function errAnn(text, targetId = null) { announce(text, targetId, COLOR.ERR); }
function casinoAnn(text, targetId = null) { announce(text, targetId, COLOR.CASINO); }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let balances = {}; 

function getAuth(player) {
  return player && player.auth ? player.auth : player && player.id !== undefined ? String(player.id) : null;
}

function ensureBalanceFor(player) {
  const auth = getAuth(player);
  if (!auth) return null;
  if (balances[auth] === undefined) balances[auth] = 500; 
  return auth;
}

room.onPlayerJoin = function(player) {
  const auth = ensureBalanceFor(player);
  if (auth) okAnn(`💵 Welcome ${player.name}! Balance: $${balances[auth]}`, player.id);
};

room.onPlayerLeave = function(player) {
};




const RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const SUITS = ["♠","♥","♦","♣"]; 
function fullCard(rank, suitIndex) { return `${rank}${SUITS[suitIndex]}`; }

function rankValue(rank) {
  if (rank === "A") return 11;
  if (["J","Q","K"].includes(rank)) return 10;
  return parseInt(rank);
}

function handValue(handRanks) {
  let total = 0;
  let aces = 0;
  for (let r of handRanks) {
    total += rankValue(r);
    if (r === "A") aces++;
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

function handToTextWithSuits(hand) {
  return hand.map(c => fullCard(c.rank, c.suitIndex)).join(" ");
}

function handToTextRanks(hand) {
  return hand.map(c => c.rank).join(",");
}

let table = null;

function newDeck() {
  let deck = [];
  for (let s = 0; s < SUITS.length; s++) {
    for (let r of RANKS) deck.push({rank: r, suitIndex: s});
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  for (let k = 0; k < 3; k++) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  return deck;
}

function createTable(initiatorPlayer) {
  table = {
    deck: newDeck(),
    players: [],
    dealer: [],
    lobbyOpen: true,
    lobbyTimer: null,
    turnPlayerIndex: 0
  };
  casinoAnn(`🎰 ${initiatorPlayer.name} opened a Blackjack table! Type !join <bet> to join. 15s lobby starting...`);
  table.lobbyTimer = setTimeout(() => {
    if (!table) return;
    if (table.players.length === 0) {
      warnAnn("Nobody joined — table closed.");
      table = null;
      return;
    }
    table.lobbyOpen = false;
    startRound();
  }, 15000);
}

function findTablePlayerByAuth(auth) {
  if (!table) return null;
  return table.players.find(p => p.auth === auth);
}

function displayBalances() {
  const list = room.getPlayerList().map(p => {
    const auth = getAuth(p);
    const bal = balances[auth] !== undefined ? balances[auth] : 0;
    return `${p.name}: $${bal}`;
  });
  announce("💼 Balances: " + list.join(" | "), null, COLOR.INFO, "bold", 1);
}


function playerJoinTable(player, betAmount) {
  if (!table || !table.lobbyOpen) return errAnn("No open lobby to join.", player.id);
  const auth = ensureBalanceFor(player);
  if (!auth) return errAnn("Auth missing.", player.id);

  betAmount = parseInt(betAmount, 10);
  if (isNaN(betAmount) || betAmount <= 0) return errAnn("Invalid bet amount.", player.id);
  if (balances[auth] < betAmount) return errAnn(`You don't have $${betAmount}.`, player.id);

  if (findTablePlayerByAuth(auth)) return warnAnn(`${player.name}, you're already at the table.`, player.id);

  balances[auth] -= betAmount;

  const tablePlayer = {
    auth,
    id: player.id,
    name: player.name,
    bet: betAmount,
    hands: [], 
    currentHandIndex: 0,
    standing: []
  };
  table.players.push(tablePlayer);
  okAnn(`🟩 ${player.name} joined the table with $${betAmount}`, null);
  displayBalances();
}

async function startRound() {
  if (!table) return;
  casinoAnn("🔄 Dealing round — good luck!");
  table.players.forEach(tp => {
    tp.hands = [[]];
    tp.currentHandIndex = 0;
    tp.standing = [false];
  });
  table.dealer = [];


  for (let tp of table.players) {
    tp.hands[0].push(table.deck.pop());
    await sleep(200);
    announce(`🂠 ${tp.name} - first card: ${handToTextWithSuits(tp.hands[0])}`, tp.id, COLOR.INFO);
  }
  for (let tp of table.players) {
    tp.hands[0].push(table.deck.pop());
    await sleep(200);
    announce(`🂠 ${tp.name} - second card: ${handToTextWithSuits(tp.hands[0])}`, tp.id, COLOR.INFO);
  }

  table.dealer.push(table.deck.pop());
  table.dealer.push(table.deck.pop());
  await sleep(200);
  casinoAnn(`👁 Dealer visible: ${handToTextWithSuits([table.dealer[0]])}`);
  table.turnPlayerIndex = 0;
  await sleep(400);
  promptCurrentPlayer();
}

function promptCurrentPlayer() {
  if (!table) return;
  let allDone = true;
  for (let tp of table.players) {
    for (let i = 0; i < tp.hands.length; i++) {
      if (!tp.standing[i]) { allDone = false; break; }
    }
    if (!allDone) break;
  }
  if (allDone) {
    processDealerTurn();
    return;
  }

  if (table.turnPlayerIndex >= table.players.length) table.turnPlayerIndex = 0;
  const tp = table.players[table.turnPlayerIndex];

  let startIndex = table.turnPlayerIndex;
  let searched = 0;
  while (searched < table.players.length) {
    const cur = table.players[table.turnPlayerIndex];
    if (cur.currentHandIndex >= cur.hands.length) {
      table.turnPlayerIndex = (table.turnPlayerIndex + 1) % table.players.length;
      searched++;
      continue;
    }
    if (!cur.standing[cur.currentHandIndex]) {
      const hand = cur.hands[cur.currentHandIndex];
      const val = handValue(hand.map(c => c.rank));
      announce(`👉 ${cur.name}'s turn (Hand ${cur.currentHandIndex+1}) — ${handToTextWithSuits(hand)} | Total: ${val}`, cur.id, COLOR.INFO);
      announce(`Commands: !hit | !stand | !double | !split`, cur.id, COLOR.WARN);
      return;
    } else {
      cur.currentHandIndex++;
      if (cur.currentHandIndex >= cur.hands.length) {
        table.turnPlayerIndex = (table.turnPlayerIndex + 1) % table.players.length;
        searched++;
      }
    }
  }
  processDealerTurn();
}

async function processDealerTurn() {
  casinoAnn("🤵 Dealer's turn — revealing hole card...");
  casinoAnn(`🂠 Dealer hand: ${handToTextWithSuits(table.dealer)} | Total: ${handValue(table.dealer.map(c => c.rank))}`);
  while (handValue(table.dealer.map(c => c.rank)) < 17) {
    await sleep(600);
    const card = table.deck.pop();
    table.dealer.push(card);
    casinoAnn(`📥 Dealer draws: ${handToTextWithSuits([card])}`);
  }
  await sleep(400);
  resolveRoundResults();
}

function payOut(winnerAuth, amount) {
  balances[winnerAuth] = (balances[winnerAuth] || 0) + amount;
}

function resolveRoundResults() {
  const dealerTotal = handValue(table.dealer.map(c => c.rank));
  casinoAnn(`📊 Round results — Dealer: ${dealerTotal}`);

  for (let tp of table.players) {
    const auth = tp.auth;
    for (let hIndex = 0; hIndex < tp.hands.length; hIndex++) {
      const hand = tp.hands[hIndex];
      const ranks = hand.map(c => c.rank);
      const val = handValue(ranks);
      const baseBet = tp.bet; 
      const isBlackjack = (hand.length === 2 && ((ranks.includes("A") && ranks.includes("10")) || (ranks.includes("A") && (ranks.includes("J")||ranks.includes("Q")||ranks.includes("K")))));

      if (val > 21) {
        errAnn(`❌ ${tp.name} (Hand ${hIndex+1}) busted with ${val} — lost $${baseBet}`);
        continue;
      }

      if (isBlackjack && dealerTotal !== 21) {
        const payout = Math.floor(baseBet * 2.5); 
        okAnn(`🌟 ${tp.name} (Hand ${hIndex+1}) NATURAL BLACKJACK! Payout: $${payout}`);
        payOut(auth, payout);
        continue;
      }

      if (dealerTotal > 21 || val > dealerTotal) {
        okAnn(`🏆 ${tp.name} (Hand ${hIndex+1}) wins ${val} vs dealer ${dealerTotal} — wins $${baseBet*2}`);
        payOut(auth, baseBet * 2);
      } else if (val === dealerTotal) {
        shortAnn(`➖ ${tp.name} (Hand ${hIndex+1}) pushes ${val} — bet returned $${baseBet}`);
        payOut(auth, baseBet); 
      } else {
        errAnn(`❌ ${tp.name} (Hand ${hIndex+1}) ${val} lost to dealer ${dealerTotal} — lost $${baseBet}`);
      }
    }
  }
  
  announce("🏁 Balances after round:");
  for (let tp of table.players) {
    const b = balances[tp.auth] || 0;
    announce(`• ${tp.name}: $${b}`);
  }

  table = null;
}

room.onPlayerChat = function(player, message) {
  message = message.trim();
  const parts = message.split(/\s+/);
  const cmd = parts[0].toLowerCase();

  ensureBalanceFor(player);

  if (cmd === "!balance" || cmd === "!bal" || cmd === "!dinero") {
    const auth = getAuth(player);
    okAnn(`💰 ${player.name}, balance: $${balances[auth]}`, player.id);
    return false;
  }

  if (cmd === "!send" || cmd === "!enviar") {
    if (parts.length < 3) {
      warnAnn("Usage: !send <playerName> <amount>", player.id);
      return false;
    }
    const targetName = parts[1].toLowerCase();
    const amount = parseInt(parts[2], 10);
    if (isNaN(amount) || amount <= 0) {
      errAnn("Invalid amount.", player.id);
      return false;
    }
    const target = room.getPlayerList().find(p => p.name.toLowerCase() === targetName);
    if (!target) {
      errAnn("Player not found.", player.id);
      return false;
    }
    const authFrom = getAuth(player);
    const authTo = getAuth(target);
    if (balances[authFrom] < amount) return errAnn("Insufficient funds.", player.id);
    balances[authFrom] -= amount;
    balances[authTo] = (balances[authTo] || 0) + amount;
    okAnn(`💸 ${player.name} sent $${amount} to ${target.name}`);
    okAnn(`Your new balance: $${balances[authFrom]}`, player.id);
    okAnn(`You received $${amount}. New balance: $${balances[authTo]}`, target.id);
    return false;
  }

  if (cmd === "!blackjack") {
    if (!table) {
      createTable(player);
    } else {
      warnAnn("A table is already open. Use !join <bet> to enter.");
    }
    return false;
  }

  if (cmd === "!join") {
    if (!table || !table.lobbyOpen) {
      return warnAnn("No open table lobby to join.");
    }
    if (parts.length < 2) return warnAnn("Usage: !join <bet>");
    playerJoinTable(player, parts[1]);
    return false;
  }

  if (!table || table.lobbyOpen) return true;

  const auth = getAuth(player);
  const tablePlayer = findTablePlayerByAuth(auth);
  if (!tablePlayer) return true;

  const currentTP = table.players[table.turnPlayerIndex];
  if (!currentTP || currentTP.auth !== auth) {
    if (cmd === "!hand") {
      const hand = tablePlayer.hands[tablePlayer.currentHandIndex];
      const text = handToTextWithSuits(hand);
      announce(`🂠 ${player.name} current hand: ${text} | Total: ${handValue(hand.map(c => c.rank))}`, player.id, COLOR.INFO);
      return false;
    }
    return true;
  }

  if (cmd === "!hit" || cmd === "!pedir" || cmd === "!h") {
    const curHandIdx = tablePlayer.currentHandIndex;
    const card = table.deck.pop();
    tablePlayer.hands[curHandIdx].push(card);
    announce(`📥 ${player.name} draws ${handToTextWithSuits([card])}`, player.id, COLOR.INFO);

    const val = handValue(tablePlayer.hands[curHandIdx].map(c => c.rank));
    announce(`🃏 Hand ${curHandIdx+1}: ${handToTextWithSuits(tablePlayer.hands[curHandIdx])} | Total: ${val}`, player.id, COLOR.INFO);

    if (val > 21) {
      errAnn(`${player.name} busted on hand ${curHandIdx+1} with ${val}`, null);
      tablePlayer.standing[curHandIdx] = true;
      advanceAfterAction();
    }
    return false;
  }

  if (cmd === "!stand" || cmd === "!plantar" || cmd === "!s") {
    const curHandIdx = tablePlayer.currentHandIndex;
    tablePlayer.standing[curHandIdx] = true;
    okAnn(`${player.name} stands on hand ${curHandIdx+1}`, null);
    advanceAfterAction();
    return false;
  }

  if (cmd === "!double" || cmd === "!doubleDown") {
    const curHandIdx = tablePlayer.currentHandIndex;
    const curHand = tablePlayer.hands[curHandIdx];
    if (curHand.length !== 2) return errAnn("Double allowed only on initial 2-card hand.", player.id);
    const extra = tablePlayer.bet;
    if (balances[auth] < extra) return errAnn("Not enough to double.", player.id);
    balances[auth] -= extra; 
    tablePlayer.bet += extra; 
    const card = table.deck.pop();
    curHand.push(card);
    announce(`💰 ${player.name} doubles and draws ${handToTextWithSuits([card])}`, null, COLOR.CASINO);
    const val = handValue(curHand.map(c => c.rank));
    announce(`🃏 Hand ${curHandIdx+1}: ${handToTextWithSuits(curHand)} | Total: ${val}`, player.id, COLOR.INFO);
    tablePlayer.standing[curHandIdx] = true;
    advanceAfterAction();
    return false;
  }

  if (cmd === "!split") {
    const curHandIdx = tablePlayer.currentHandIndex;
    const curHand = tablePlayer.hands[curHandIdx];
    if (curHand.length !== 2) return errAnn("Split only allowed with exactly 2 cards.", player.id);
    const r0 = curHand[0].rank, r1 = curHand[1].rank;
    if (rankValue(r0) !== rankValue(r1)) return errAnn("Split only allowed for same-value ranks.", player.id);
    if (balances[auth] < tablePlayer.bet) return errAnn("Not enough to split.", player.id);
    balances[auth] -= tablePlayer.bet;
    const card1 = curHand[0];
    const card2 = curHand[1];
    tablePlayer.hands[curHandIdx] = [card1];
    tablePlayer.hands.splice(curHandIdx + 1, 0, [card2]);
    tablePlayer.hands[curHandIdx].push(table.deck.pop());
    tablePlayer.hands[curHandIdx+1].push(table.deck.pop());
    tablePlayer.standing = tablePlayer.hands.map(_ => false);
    okAnn(`${player.name} SPLIT into 2 hands!`, null);
    announce(`🂠 Hand1: ${handToTextWithSuits(tablePlayer.hands[curHandIdx])} | Hand2: ${handToTextWithSuits(tablePlayer.hands[curHandIdx+1])}`, player.id, COLOR.INFO);
    return false;
  }

  return true;
};

function advanceAfterAction() {
  const tp = table.players[table.turnPlayerIndex];
  while (tp.currentHandIndex < tp.hands.length && tp.standing[tp.currentHandIndex]) {
    tp.currentHandIndex++;
  }
  if (tp.currentHandIndex >= tp.hands.length) {
    table.turnPlayerIndex = (table.turnPlayerIndex + 1) % table.players.length;
  }
  setTimeout(promptCurrentPlayer, 300);
}

room.onPlayerChat = (function(oldHandler) {
  return function(player, msgRaw) {
    const parts = msgRaw.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();

    if (cmd === "!forcestop" && player.admin) {
      if (table) {
        table = null;
        warnAnn("Table forcibly closed by admin.");
      } else warnAnn("No active table to close.");
      return false;
    }

    if (cmd === "!state" && player.admin) {
      if (!table) {
        announce("No active table.");
      } else {
        announce(`Table State: lobbyOpen=${table.lobbyOpen}, players=${table.players.length}`);
        table.players.forEach((tp, i) => announce(`#${i+1} ${tp.name} bet:$${tp.bet} hands:${tp.hands.length}`));
      }
      return false;
    }
    return oldHandler(player, msgRaw);
  };
})(room.onPlayerChat);

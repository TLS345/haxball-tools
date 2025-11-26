const triviaList = [
  {
    question: "Who won the 2022 FIFA World Cup?",
    options: ["A) France", "B) Argentina", "C) Brazil"],
    answer: "b"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A) Venus", "B) Jupiter", "C) Mars"],
    answer: "c"
  },
  {
    question: "What language is primarily spoken in Brazil?",
    options: ["A) Spanish", "B) Portuguese", "C) English"],
    answer: "b"
  },
  {
    question: "Who created Haxball?",
    options: ["A) Basro", "B) Notch", "C) Gabe Newell"],
    answer: "a"
  },
  {
    question: "What does FPS stand for?",
    options: ["A) Frames Per Second", "B) Fast Player Speed", "C) Free Play Session"],
    answer: "a"
  }
];

let currentTrivia = null;
let triviaActive = false;

setInterval(() => {
  if (triviaActive) return; 

  const trivia = triviaList[Math.floor(Math.random() * triviaList.length)];
  currentTrivia = trivia;
  triviaActive = true;

  room.sendChat("━━━━━━━━━━━━━━━💫━━━━━━━━━━━━━━━");
  room.sendChat(`🎓 *Trivia Time!*`);
  room.sendChat(`❓ ${trivia.question}`);
  trivia.options.forEach(opt => room.sendChat(opt));
  room.sendChat(`💡 Type A, B, or C to answer!`);
  room.sendChat("━━━━━━━━━━━━━━━💫━━━━━━━━━━━━━━━");
}, 300000);

room.onPlayerChat = (player, message) => {
  if (!triviaActive) return;

  const msg = message.trim().toLowerCase();
  const validAnswers = ["a", "b", "c"];

  if (validAnswers.includes(msg)) {
    if (msg === currentTrivia.answer) {
      room.sendChat(`🏆 *${player.name} answered correctly!*`);
    } else {
      room.sendChat(`❌ ${player.name} guessed wrong!`);
    }
    triviaActive = false;
    currentTrivia = null;
    return false;
  }
};

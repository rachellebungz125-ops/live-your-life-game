let money = 100;
let grades = 50;
let energy = 50;
let level = 0;

const scenarios = [
  {
    question: "Enrollment day! You forgot your documents.",
    choices: [
      { text: "A. Go home and get them", money: -20, grades: 0, energy: -10, result: "You got them, but missed orientation." },
      { text: "B. Bribe the registrar", money: -100, grades: 0, energy: 0, result: "Risky move, but it worked." },
      { text: "C. Skip enrollment", money: 0, grades: -20, energy: 10, result: "You missed your first week!" }
    ]
  },
  {
    question: "Typhoon hits Borongan! Classes are suspended.",
    choices: [
      { text: "A. Study at home", money: 0, grades: 10, energy: -5, result: "You stayed productive!" },
      { text: "B. Sleep all day", money: 0, grades: -5, energy: 10, result: "You’re well-rested." },
      { text: "C. Go out with friends", money: -50, grades: -10, energy: 5, result: "Fun but risky!" }
    ]
  },
  {
    question: "Your phone breaks before a group project.",
    choices: [
      { text: "A. Borrow a friend’s", money: 0, grades: 5, energy: -5, result: "You managed!" },
      { text: "B. Buy a new one", money: -200, grades: 0, energy: -5, result: "Ouch, expensive!" },
      { text: "C. Ignore the project", money: 0, grades: -15, energy: 5, result: "Your group is mad." }
    ]
  },
  {
    question: "You’re invited to a student org.",
    choices: [
      { text: "A. Join and be active", money: -20, grades: 5, energy: -10, result: "You gained leadership skills!" },
      { text: "B. Join but stay quiet", money: -10, grades: 0, energy: 0, result: "You’re just a name on the list." },
      { text: "C. Decline", money: 0, grades: 0, energy: 5, result: "More time for yourself." }
    ]
  },
  {
    question: "Surprise quiz! You didn’t study.",
    choices: [
      { text: "A. Guess answers", money: 0, grades: -5, energy: -5, result: "You passed... barely." },
      { text: "B. Skip class", money: 0, grades: -10, energy: 10, result: "You avoided it, but lost points." },
      { text: "C. Ask seatmate for help", money: 0, grades: 5, energy: -5, result: "Risky but helpful!" }
    ]
  },
  {
    question: "You’re broke before midterms.",
    choices: [
      { text: "A. Sell old clothes", money: 50, grades: 0, energy: -5, result: "Ukay-Ukay hustle!" },
      { text: "B. Borrow from a friend", money: 100, grades: 0, energy: -5, result: "They helped you out." },
      { text: "C. Skip meals", money: 0, grades: -5, energy: -10, result: "You’re starving." }
    ]
  },
  {
    question: "Heartbreak! Your partner dumps you.",
    choices: [
      { text: "A. Cry and skip class", money: 0, grades: -10, energy: -10, result: "Sad and falling behind." },
      { text: "B. Focus on studies", money: 0, grades: 10, energy: -5, result: "You channeled the pain!" },
      { text: "C. Go out and party", money: -100, grades: -5, energy: 5, result: "Temporary distraction." }
    ]
  },
  {
    question: "Finals week! You’re exhausted.",
    choices: [
      { text: "A. Push through", money: 0, grades: 15, energy: -15, result: "You passed!" },
      { text: "B. Cheat", money: 0, grades: 10, energy: -5, result: "You got away with it." },
      { text: "C. Drop one subject", money: 0, grades: -10, energy: 10, result: "Less stress, but delayed grad." }
    ]
  },
  {
    question: "Internship offer! But it’s unpaid.",
    choices: [
      { text: "A. Accept it", money: 0, grades: 10, energy: -10, result: "You gained experience!" },
      { text: "B. Decline", money: 0, grades: -5, energy: 5, result: "You missed out." },
      { text: "C. Negotiate pay", money: 50, grades: 5, energy: -5, result: "You got a deal!" }
    ]
  },
  {
    question: "Graduation fees due!",
    choices: [
      { text: "A. Ask family", money: 0, grades: 0, energy: 0, result: "They helped!" },
      { text: "B. Take a loan", money: -300, grades: 0, energy: -5, result: "You’re in debt but graduated." },
      { text: "C. Delay graduation", money: 0, grades: -20, energy: 10, result: "You’ll try again next year." }
    ]
  }
];

// Add 20 more scenarios following this format to reach 30 levels

function choose(index) {
  const choice = scenarios[level].choices[index];
  money += choice.money;
  grades += choice.grades;
  energy += choice.energy;

  document.getElementById("money").textContent = money;
  document.getElementById("grades").textContent = grades;
  document.getElementById("energy").textContent = energy;
  document.getElementById("result").textContent = choice.result;

  level++;
  if (level < scenarios.length) {
    loadScenario();
  } else {
    endGame();
  }
}

function loadScenario() {
  const s = scenarios[level];
  document.getElementById("question").textContent = s.question;
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.textContent = s.choices[i].text;
    btn.onclick = () => choose(i);
  });
}

function endGame() {
  let message = "🎓 You graduated!";
  if (grades < 30) message = "😢 You failed to graduate.";
  if (money < 0) message += " You're in debt.";
  if (energy < 20) message += " You're burned out.";

  document.getElementById("scenario").innerHTML = `<p>${message}</p>`;
}

loadScenario();
let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = `It's a draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    userScore++;
    animateScore("user-score");
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    computerScore++;
    animateScore("computer-score");
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = result;
  resultDiv.style.animation = "none";
  void resultDiv.offsetWidth;
  resultDiv.style.animation = "fadeInText 0.4s ease-in-out forwards";

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function animateScore(id) {
  const element = document.getElementById(id);
  element.classList.remove("pulse");
  void element.offsetWidth;
  element.classList.add("pulse");
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("result").textContent = "";
}

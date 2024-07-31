let humanScore = 0;
let computerScore = 0;

// Returns "rock", "paper" or "scissors" using a random #
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
    let choice = prompt("rock(r), paper(p), or scissors(s)");
    choice = choice.toUpperCase();
    if (choice === "r" || choice === "rock") {
      valid = true;
      return "rock";
    } else if (choice === "p" || choice === "paper") {
      valid = true;
      return "paper";
    } else if (choice === "s" || choice === "scissors") {
      valid = true;
      return "scissors";
    } else return "not valid"
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case computerChoice == "rock" && humanChoice == "paper":
      humanChoice++;
      return "You win!";
    case humanChoice == "rock" && computerScore == "paper":
      computerScore++;
      return "You lose!";
    case computerScore == "rock" && humanChoice == "scissors":
      computerScore++;
      return "You lose!";
    case humanChoice == "rock" && computerScore == "scissors":
      humanChoice++;
      return "You win!";
    case computerScore == "scissors" && humanChoice == "paper":
      computerScore++;
      return "You lose!";
    case humanChoice == "scissors" && computerScore == "paper":
      computerScore++;
      return "You win!";
    default:
      return "Tie!";
  }
}

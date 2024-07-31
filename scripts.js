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
  choice = choice.toLowerCase();
  if (choice === "r" || choice === "rock") {
    return "rock";
  } else if (choice === "p" || choice === "paper") {
    return "paper";
  } else if (choice === "s" || choice === "scissors") {
    return "scissors";
  } else return "not valid";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  endOfRound = false;

  switch (!endOfRound) {
    // cases for human win
    case humanChoice === "paper" && computerChoice == "rock":
      endOfRound = true;
      humanScore++;
      return "You win! " + humanChoice + " beats " + computerChoice + ".";

    case humanChoice === "scissors" && computerChoice == "paper":
      endOfRound = true;
      humanScore++;
      return "You win! " + humanChoice + " beats " + computerChoice + ".";

    case humanChoice === "rock" && computerChoice == "scissors":
      endOfRound = true;
      humanScore++;
      return "You win! " + humanChoice + " beats " + computerChoice + ".";

    // cases for computer win
    case computerChoice === "paper" && humanChoice == "rock":
      endOfRound = true;
      computerScore++;
      return "You lose! " + computerChoice + " beats " + humanChoice + ".";

    case computerChoice === "scissors" && humanChoice == "paper":
      endOfRound = true;
      computerScore++;
      return "You lose! " + computerChoice + " beats " + humanChoice + ".";

    case computerChoice === "rock" && humanChoice == "scissors":
      endOfRound = true;
      computerScore++;
      return "You lose! " + computerChoice + " beats " + humanChoice + ".";

    default:
      endOfRound = true;
      return "Tie";
  }
}

function playGame() {
  let rounds = prompt("How many rounds do you wish to play?");

  for (let i = 1; i <= rounds; i++) {
    console.log("Round " + i);
    let humanSelection = getHumanChoice();
    

    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Score: " + humanScore + "\nComputers Score: " + computerScore);
  }

  if (computerScore > humanScore) return console.log("The computer won. :(");
  else if (humanScore > computerScore) return console.log("You won! :)");
  else return console.log("You've tied");
}

playGame();

function getComputerChoice() {
    const pcList = [
        "Rock",
        "Paper",
        "Scissors"
    ];


const pcChoice = Math.floor(Math.random() * pcList.length);

//console.log(pcList[pcChoice])

return pcChoice, pcList[pcChoice];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "Rock beats scissors, you win!";
  }
   else if (playerSelection === "rock" && computerSelection === "Rock") {
    return "Oops it's a draw..";
  }
  else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "Scissors beats paper, you win!";
  }
  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return "Oops it's a draw..";
  }
  else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "Paper beats rock, you win!";
  }
  else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "Oops it's a draw..";
  }
  else {
    return "Oh no, you lose this time!";
  }

}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

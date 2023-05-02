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
    return "You win!";
  }
   else if (playerSelection === "rock" && computerSelection === "Rock") {
    return "You draw!"
  }
  else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You win!";
  }
  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return "You draw!"
  }
  else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win!";
  }
  else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "You draw!"
  }
  else {
    return "You lose!";
  }

}

const playerSelection = "ROCk";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection.toLowerCase(), computerSelection));

// let result = playRound(playerSelection.toLowerCase(), computerSelection);

//let playerScore = 0;
//let computerScore = 0;

/* function game() {

if (playRound === "You win!") {

playerScore++
  
} else {
  
}



playRound

playRound

playRound

playRound

if (playerScore > computerScore) {
  return "Well done, you win!"
} else if {
  return "Unlucky, try again next time"
}

/* if (playRound === ) {
  
} else {
  
}  
playerScore++

computerScore++


} */


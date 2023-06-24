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


function game() {

  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  let playerPrompt = prompt("Choose your weapon: ");
  playRound(playerPrompt.toLowerCase(), computerSelection)
  console.log(playRound(playerPrompt, computerSelection));
}

function playGame() {

  for (let i = 0; i < 5; i++) {
   game();
  }
  
}

playGame();


/* function finalResult() {

  if (playerScore > computerScore) {
    return "Well done, you win!";
  } else if (computerScore > playerScore){
    return "Unlucky, try again next time";
  } else {
      return "Wow it's a tie!"
    }
  
} */



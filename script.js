// this function gets computer to randomly select choice from the array
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

// This function plays the game and returns the result of each potential outcome
function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win!";
  }
   else if (playerSelection === "rock" && computerSelection === "Rock") {
    return "You draw!";
  }
  else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You win!";
  }
  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return "You draw!";
  }
  else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win!";
  }
  else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "You draw!";
  }
  else {
    return "You lose!";
  }

}

// Keeps score
let pScore = 0;
let cScore = 0;

function score(result) {

  if (result === "You win!") {
    pScore++;
    alert(`You win! Your score: ${pScore}`)
    console.log(pScore + " player");
  }
  else if (result === "You lose!") {
    cScore++;
    alert(`You lose! Computer score: ${cScore}`)
    console.log(cScore + " computer");
  } else {
    alert(`You draw!`)
  }

}

// This allows the player to input their choice and play the game
function game() {

  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  let playerPrompt = prompt("Choose your weapon: ");
  let roundResult = playRound(playerPrompt.toLowerCase(), computerSelection);
  console.log(roundResult);
  score(roundResult);

}

// Loops the game 5 times
function playGame() {

  for (let i = 0; i < 5; i++) {
    game();
  }
}

// Alerts who the winner of the game is
function finalResult(finalScore) {

  if (pScore > cScore) {
    alert("Well done, you win!");
  } else if (pScore < cScore){
    alert("Unlucky, try again next time");
  } else {
      alert("Wow it's a tie!");
    }
  
} 


playGame();
finalResult(score);

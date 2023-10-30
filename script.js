// Gets computer to randomly select choice
function getComputerChoice() {

  const pcList = [
    "Rock",
    "Paper",
    "Scissors"
  ];

  const pcChoice = Math.floor(Math.random() * pcList.length);
  console.log(pcList[pcChoice])

  return pcChoice, pcList[pcChoice];

}

// making the page dynamic with buttons etc.
const btnr = document.querySelector('#rock');
const btnp = document.querySelector('#paper');
const btns = document.querySelector('#scissors');

btnr.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const rr = document.querySelector('#roundResult');
  const rrText = document.createElement('div');
  rrText.textContent = (playRound("rock", computerChoice));
  rr.appendChild(rrText);
  console.log(playRound("rock", computerChoice));
});

btnp.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  console.log(playRound("paper", computerChoice));
});

btns.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  console.log(playRound("scissors", computerChoice));
});

// This function plays the game and returns the result of each potential outcome
function playRound(playerSelection, computerChoice) {

  if (playerSelection === "rock" && computerChoice === "Scissors") {
    return "You win!";
  }
  else if (playerSelection === "rock" && computerChoice === "Rock") {
    return "You draw!";
  }
  else if (playerSelection === "scissors" && computerChoice === "Paper") {
    return "You win!";
  }
  else if (playerSelection === "scissors" && computerChoice === "Scissors") {
    return "You draw!";
  }
  else if (playerSelection === "paper" && computerChoice === "Rock") {
    return "You win!";
  }
  else if (playerSelection === "paper" && computerChoice === "Paper") {
    return "You draw!";
  }
  else {
    return "You lose!";
  }

}

// This allows the player to input their choice and play the game

//function game() 

//let playerPrompt = prompt("Choose your weapon: ");
//let roundResult = btnr.addEventListener('click', function() { playRound("rock", computerChoice) });
//console.log(roundResult);
//playRound(playerPrompt.toLowerCase(), computerChoice);
//console.log(roundResult);
//score(roundResult);



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

// Loops the game 5 times
/*function playGame() {

  for (let i = 0; i < 5; i++) {
    game();
  }
}*/

// Alerts who the winner of the game is
function finalResult() {

  if (pScore > cScore) {
    alert("Well done, you win!");
  } else if (pScore < cScore) {
    alert("Unlucky, try again next time");
  } else {
    alert("Wow it's a tie!");
  }

}

//game();
//playGame();
//finalResult(score);








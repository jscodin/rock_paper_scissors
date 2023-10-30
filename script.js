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
  //const rrText = document.createElement('div');
  rr.textContent = (playRound("rock", computerChoice));
  //rr.appendChild(rrText);
  const cc = document.querySelector('#compChoice')
  //const ccText = document.createElement('div');
  cc.textContent = `Computer chooses: ${computerChoice}`;
  //cc.appendChild(ccText);
  result = playRound("rock", computerChoice);
  score(result);
  //console.log(playRound("rock", computerChoice));
});

btnp.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const rr = document.querySelector('#roundResult');
  rr.textContent = (playRound("paper", computerChoice));
  const cc = document.querySelector('#compChoice')
  cc.textContent = `Computer chooses: ${computerChoice}`;
  result = playRound("paper", computerChoice);
  score(result);
});

btns.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const rr = document.querySelector('#roundResult');
  rr.textContent = (playRound("scissors", computerChoice));
  const cc = document.querySelector('#compChoice')
  cc.textContent = `Computer chooses: ${computerChoice}`;
  result = playRound("scissors", computerChoice);
  score(result);
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

// Keeps score
let pScore = 0;
let cScore = 0;

function score(result) {

  if (result === "You win!") {
    pScore++;
    const ps = document.querySelector("#playerScore");
    ps.textContent = `Your score: ${pScore}`;
    console.log(pScore + " player");
  }
  else if (result === "You lose!") {
    cScore++;
    const cs = document.querySelector("#compScore");
    cs.textContent = `Computer score: ${cScore}`;
    console.log(cScore + " computer");
  }
  if (pScore === 5 || cScore === 5) {
    // Delay the execution of finalResult by 100 milliseconds
    setTimeout(finalResult, 100);
  }
}

// Alerts who the winner of the game is
function finalResult() {

  if (pScore === 5) {
    alert("Well done, you win!");
  } else if (cScore === 5) {
    alert("Unlucky, try again next time");
  }
}


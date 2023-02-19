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

console.log(getComputerChoice());


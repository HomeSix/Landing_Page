console.log("Hello World");


getHumanChoice();
getComputerChoice();

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    console.log("Run getComputerChoice");

    while (true) {
        var random = Math.random();
        console.log(random)
        if (random < 0.3) {
            computerChoice = "Rock";
            break;
        } else if (random > 0.3 && random < 0.6){
            computerChoice = "Paper";
            break;
        } else if (random > 0.6) {
            computerChoice = "Scissor"
            break;
        }
    }

    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() {
    humanChoice = window.prompt("Choose Rock Paper or Scissors", "");
    console.log(humanChoice);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

}
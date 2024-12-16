var humanScore = 0
var computerScore = 0

function getComputerChoice() {
    
    while (true) {
        random = Math.random()
        if (random < 0.33) {
            computerChoice = "Rock"
            break
        } else if (random > 0.33 && random < 0.66) {
            computerChoice = "Paper"
            break
        } else if (random > 0.66) {
            computerChoice = "Scissor"
            break
        }
    }

    console.log("Computer USES", computerChoice)
    return computerChoice
}

function playround(humanChoice, computerChoice) {

    hc = humanChoice.toLowerCase()
    cc = computerChoice.toLowerCase()

    if (hc === cc) {
        const score = document.getElementById("score")
        score.innerText = "DRAW!"
    } else if ( hc == "rock" && cc == "scissor" ||
                hc == "paper" && cc == "rock" ||
                hc == "scissor" && cc == "paper")
    {
        const score = document.getElementById("score")
        score.innerText = "You Score!"
        humanScore++
    } else {
        const score = document.getElementById("score")
        score.innerText = "Computer Score!"
        computerScore++
    }
}

const btns = document.querySelectorAll("button")

btns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Getting human choice..")
        const humanChoice = button.id
        console.log("Human USES", humanChoice)

        console.log("Getting computer choice..")
        const computerChoice = getComputerChoice()

        playround(humanChoice, computerChoice)
        changeContent()
    })
})

function changeContent() {
    const humanScoreP = document.getElementById("hScore")
    humanScoreP.innerText = humanScore

    const computerScoreP = document.getElementById("cScore")
    computerScoreP.innerText = computerScore

    const score = document.getElementById("score")

    if (humanScore == 5) {
        humanScore = 0
        computerScore = 0
        prompt("You WIN!")
        humanScoreP.innerText = "0"
        computerScoreP.innerText = "0"
        score.innerText = ""
    } else if (computerScore == 5) {
        humanScore = 0
        computerScore = 0
        prompt("You LOSE!")
        humanScoreP.innerText = "0"
        computerScoreP.innerText = "0"
        score.innerText = ""
    }
}
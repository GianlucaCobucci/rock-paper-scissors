const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

const choiceToEmoji = {
    "rock": "🪨",
    "paper": "🧻",
    "scissors": "✂",
};

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    // choiceToEmoji è un oggetto che mappa le scelte("rock", "paper", "scissors") 
    // ai loro corrispondenti emoji.userChoice viene utilizzato come chiave per 
    // ottenere il corrispondente valore emoji dall'oggetto
    userChoiceDisplay.innerHTML = userChoice + " " + choiceToEmoji[userChoice];

    generateComputerChoice();
    getResult();
}))

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice + " " + choiceToEmoji[computerChoice];
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw! 👐";
    } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
    ) {
        result = "You won! 🎉";
    } else {
        result = "You lost! 😭";
    }
    resultDisplay.innerHTML = result;
}
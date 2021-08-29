
let rock = document.querySelector("#rps-rock");
let paper = document.querySelector("#rps-paper");
let scissors = document.querySelector("#rps-scissors");

let playerInput;
rock.addEventListener("click", function () {
    playerInput = "Rock";
    console.log(playRound(playerInput,computerPlay()));
});
paper.addEventListener("click", function () {
    playerInput = "Paper";
    console.log(playRound(playerInput,computerPlay()));
});
scissors.addEventListener("click", function () {
    playerInput = "Scissors";
    console.log(playRound(playerInput,computerPlay()));
});

function computerPlay() {
    let rand = Math.random();
    if(rand < 0.33)
        return "Rock";
    else if(rand < 0.66)
        return "Paper";
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "Rock")
    {
        if(computerSelection === "Paper")
            return "You Lose! Paper beats Rock";
        else if(computerSelection === "Scissors")
            return "You Won! Rock beats Scissors";
        else
            return "You Tied! Rock equals Rock";

    } else if (playerSelection === "Paper")
    {
        if(computerSelection === "Scissors")
            return "You Lose! Scissors beats Paper";
        else if(computerSelection === "Rock")
            return "You Won! Paper beats Rock";
        else
            return "You Tied! Paper equals Paper";
    } else
    {
        if(computerSelection === "Rock")
            return "You Lose! Rock beats Scissors";
        else if(computerSelection === "Paper")
            return "You Won! Scissors beats Paper";
        else
            return "You Tied! Scissors equals Scissors";
    }
}

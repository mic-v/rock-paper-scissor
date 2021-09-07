
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
    let totalGames = parseInt(document.querySelector("#total").innerHTML);
    document.querySelector("#total").innerHTML = totalGames + 1; 
    if(playerSelection === "Rock")
    {
        if(computerSelection === "Paper")
        {
            let loss = parseInt(document.querySelector("#loss").innerHTML);
            document.querySelector("#results").innerHTML = "You Lost! Paper beats Rock";
            document.querySelector("#loss").innerHTML = loss + 1; 
        }
        else if(computerSelection === "Scissors")
        { 
            let wins = parseInt(document.querySelector("#wins").innerHTML);
            document.querySelector("#results").innerHTML = "You Won! Rock beats Scissors";
            document.querySelector("#wins").innerHTML = wins + 1; 
        }
        else
        {
            let ties = parseInt(document.querySelector("#ties").innerHTML);
            document.querySelector("#results").innerHTML = "You Tied! Rock equals Rock";
            document.querySelector("#ties").innerHTML = ties + 1; 
        }
        return false;

    } else if (playerSelection === "Paper")
    {
        if(computerSelection === "Scissors")
        {
            let loss = parseInt(document.querySelector("#loss").innerHTML);
            document.querySelector("#results").innerHTML = "You Lost! Scissors beats Paper";
            document.querySelector("#loss").innerHTML = loss + 1; 
        }
        else if(computerSelection === "Rock")
        {
            let wins = parseInt(document.querySelector("#wins").innerHTML);
            document.querySelector("#results").innerHTML = "You Won! Paper beats Rock";
            document.querySelector("#wins").innerHTML = wins + 1; 
        }
        else
        {
            let ties = parseInt(document.querySelector("#ties").innerHTML);
            document.querySelector("#results").innerHTML = "You Tied! Paper equals Paper";
            document.querySelector("#ties").innerHTML = ties + 1; 
        }
        return false;
    } 
    else
    {
        if(computerSelection === "Rock")
        {
            let loss = parseInt(document.querySelector("#loss").innerHTML);
             document.querySelector("#results").innerHTML = "You Lost! Rock beats Scissors";
             document.querySelector("#loss").innerHTML = loss + 1; 
        }
        else if(computerSelection === "Paper")
        {
            let wins = parseInt(document.querySelector("#wins").innerHTML);
            document.querySelector("#results").innerHTML = "You Won! Scissors beats Paper";
            document.querySelector("#wins").innerHTML = wins + 1; 
        }
        else
        {
            let ties = parseInt(document.querySelector("#ties").innerHTML);
            document.querySelector("#results").innerHTML = "You Tied! Scissors equals Scissors";
            document.querySelector("#ties").innerHTML = ties + 1; 
        }
    
        return false;
    }
    return false;
}

function darkMode() {
    let sliderOn = document.getElementById("sliderCheck");
    if(sliderOn.checked == true) {  
        document.getElementsByTagName("body")[0].style = "background-color: rgb(20,20,20)";
        document.getElementById("main-section").style = "background-color: rgb(40,40,40)";
        document.getElementById("site-header").style = "background-color: rgb(60,60,60)";
        document.getElementById("rps-stats").style = "background-color: rgb(100,100,100)";
        document.getElementById("site-header").style.color = "rgb(255,255,255)";
        document.getElementById("main-section").style.color = "rgb(255,255,255)";
        let rpsButtons = document.querySelectorAll(".rps-button");
        for(let i = 0; i < rpsButtons.length; i++) {
            rpsButtons[i].style = "background-color: rgb(100,100,100)";
        }

        let h6Elements = document.getElementsByTagName("h6");
        for(let i = 0; i < h6Elements.length; i++) {
            h6Elements[i].style.color = "#fff";
        }

        document.getElementsByClassName("footer")[0].style.color = "#fff";
        document.getElementsByClassName("footer")[0].style.backgroundColor = "#3c3c3c";
        
    }
    else {
        document.getElementsByTagName("body")[0].style = "background-color: #ffffff";
        document.getElementsByTagName("body")[0].style.backgroundColor = "";
        document.getElementById("main-section").style.backgroundColor = "";
        document.getElementById("site-header").style.backgroundColor = "";
        document.getElementById("site-header").style.color = "";
        document.getElementById("rps-stats").style = "";
        document.getElementById("main-section").style.color = "";

        let rpsButtons = document.getElementsByClassName("rps-button");
        for(let i = 0; i < rpsButtons.length; i++) {
            rpsButtons[i].style = "";
        }

        let h6Elements = document.getElementsByTagName("h6");
        for(let i = 0; i < h6Elements.length; i++) {
            h6Elements[i].style.color = "";
        }

        document.getElementsByClassName("footer")[0].style.color = "";
        document.getElementsByClassName("footer")[0].style.backgroundColor = "";
    }
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0 )
        return "ROCK";
    if (choice == 1)
        return "PAPER";
    if (choice == 2)
        return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection)
        return("It's a tie. You both chosen " + playerSelection);
    else if(playerSelection == "ROCK" && computerSelection == "PAPER")
        return("You lose! " + computerSelection + " beats " + playerSelection);
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS")
        return("You won! " + playerSelection + " beats " + computerSelection);
    else if(playerSelection == "ROCK" && computerSelection == "PAPER")
        return("You lose! " + computerSelection + " beats " + playerSelection);
    else if(playerSelection == "PAPER" && computerSelection == "ROCK")
        return("You won! " + playerSelection + " beats " + computerSelection);
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS")
        return("You lose! " + computerSelection + " beats " + playerSelection);
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER")
        return("You won! " + playerSelection + " beats " + computerSelection);
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK")
        return("You lose! " + computerSelection + " beats " + playerSelection);
}
function game(){
    let i = 0;
    while (i<5){
        console.log(playRound("rock",getComputerChoice()));
        i++;
    }
}
game();
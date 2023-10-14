    // create a getComputerChoice() Which randomly return either "Rock", "Paper" or "Scissor"
    function getComputerChoice() {
        let randomNum = Math.floor(Math.random() * 3);

        switch(randomNum) {

            case 0:
                return "rock"
            
            case 1:
                return "paper"
            
            default:
                return "scissor"
        }
    }

    
    // create a playRound() which takes two parameters the playerSelection and the computerSelection
    // that should return the string that declares the winner of the round
    function playRound(computerSelection, playerSelection) {
        if (computerSelection == playerSelection) {
            return "Oops... Its a tie"
            
        } else if(playerSelection == "paper" && computerSelection == "rock") {
            playerWins+=1;
            return "You won!! paper beats rock"
            
        } else if (playerSelection == "rock" && computerSelection == "scissor") {
            playerWins+=1;
            return "You won!! rock beats scissor"
            
        } else if (playerSelection == "scissor" && computerSelection == "paper") {
            playerWins+=1;
            return "You won!! scissor beats paper"
            
        } else if (computerSelection == "scissor" && playerSelection == "paper") {
            computerWins+=1;
            return "You lost! scissor beats paper"
            
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            computerWins+=1;
            return "You lost! paper beats rock"
            
        } else if (computerSelection == "rock" && playerSelection == "scissor") {
            computerWins+=1;
            return "you lost! rock beats scissor"

        } else {
            return "Invalid input"
        }
    }
    
    
    let playerWins = 0;
    let computerWins = 0;
    
    // create a new function game() that uses the previous function inside of this function to play
    // a 5 round game
    function game() {
        
        let computerSelection = getComputerChoice();        
        let playerSelection = prompt("Choose one (rock, paper, scissor)").trim().toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

        computerSelection = getComputerChoice();        
        playerSelection = prompt("Choose one (rock, paper, scissor)").trim().toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

        computerSelection = getComputerChoice();        
        playerSelection = prompt("Choose one (rock, paper, scissor)").trim().toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

        computerSelection = getComputerChoice();        
        playerSelection = prompt("Choose one (rock, paper, scissor)").trim().toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

        computerSelection = getComputerChoice();        
        playerSelection = prompt("Choose one (rock, paper, scissor)").trim().toLowerCase();
        console.log(playRound(computerSelection, playerSelection));


        if(playerWins == computerWins) {
            console.log("Its a Draw");
        } else if(playerWins > computerWins) {
            console.log("Congrats, you win");
        } else {
            console.log("Computer wins");
        }
    }

    game()
const things = ['Rock', 'Paper', 'Scissor'];

const getComputerChoice = things[Math.floor(Math.random()*things.length)];
// const computerSelection = getComputerChoice();
console.log(getComputerChoice)


const playerSelection = window.prompt("Choose Rock, Paper, or Scissor");
console.log(playerSelection)

const play5Round = (result,getComputerChoice) => {
    let compScore=0;
    let yourScore=0;     
    result = prompt("Rock, paper, scissor?");
        for (let i = 0; i <= 5; i++) {
        if (result === getComputerChoice)
        {
            console.log ("It's a tie");
            result = prompt("Rock, paper, scissor?");
    
        }
        else if (result == 'Rock' && getComputerChoice =='Paper')
        {
            console.log("You lose, paper covers rock. Computer score", compScore ++ , "Your score", yourScore)
            result = prompt("Rock, paper, scissor?");
        }
        else if (result == 'Paper' && getComputerChoice == 'Rock')
            { console.log( "You win, paper covers rock", compScore, "Your score", yourScore++)
            result = prompt("Rock, paper, scissor?");
        }
        else if (result == 'Scissor' && getComputerChoice == 'Rock')
        {
            console.log("You lose, Rock beats scissor, Computer score", compScore ++, "Your score", yourScore)
            result = prompt("Rock, paper, scissor?");
        }
        else if (result == 'Rock' && getComputerChoice == 'Scissor')
            {console.log(" You win, Rock beats scissor, Computer Score", compScore, "Your score", ++yourScore)
            result = prompt("Rock, paper, scissor?");}
        else if (result == 'Paper' && getComputerChoice =='Scissor')
        {
            console.log("You lose, scissor cuts paper. Computer score", compScore ++, "Your score", yourScore)
            result = prompt("Rock, paper, scissor?");
        }
        else { console.log( " You win, scissor cuts paper, Computer score", compScore, "Your score", ++yourScore)
        result = prompt("Rock, paper, scissor?");}
    }
}

console.log(play5Round(playerSelection, getComputerChoice));

// let win = 0;
// let lose = 0;
// console.log("Losses: " + ++lose + " Wins: " + win);

// code is not reachable for some reason
// I want to take playround and make it part of game that will loop five times; each time there's a console, log the score


// const play5Round (playerSelection, getComputerChoice) => { 
//     let compScore = 0;
//     // let yourScore = 0;
//         result = prompt("Rock, paper, scissor?");
//         for (let i = 0; i <= 5; i++) {
//         if (result === getComputerChoice)
//         {
//             console.log ("It's a tie");
//             result = prompt("Rock, paper, scissor?");
            
//         }
//         else if (result == 'Rock' && getComputerChoice =='Paper')
//         {
//             console.log("You lose, paper covers rock. Computer score", compScore ++)
//             result = prompt("Rock, paper, scissor?");
//         }
//         else if (result == 'Paper' && getComputerChoice == 'Rock')
//             { console.log( "You win, paper covers rock")
//             result = prompt("Rock, paper, scissor?");
//         }
//         else if (result == 'Scissor' && getComputerChoice == 'Rock')
//         {
//             console.log("You lose, Rock beats scissor, Computer score", compScore ++)
//             result = prompt("Rock, paper, scissor?");
//         }
//         else if (result == 'Rock' && getComputerChoice == 'Scissor')
//             {console.log(" You win, Rock beats scissor")
//             result = prompt("Rock, paper, scissor?");}
//         else if (result == 'Paper' && getComputerChoice =='Scissor')
//         {
//             console.log("You lose, scissor cuts paper. Computer score", compScore ++)
//             result = prompt("Rock, paper, scissor?");
//         }
//         else { console.log( " You win, scissor cuts paper")
//         result = prompt("Rock, paper, scissor?");}
//     }
// }


// dudes' code

// const playRound = (playerSelection,computerSelection) =>{
//     if(playerSelection === computerSelection){
//         playerScore++
//         compScore++
//         return 'Its a Draw! You both chose ' + playerSelection
//     }else if(playerSelection == 'rock'){
//         if(computerSelection == 'paper'){
//             compScore++
//             return 'You lose! Paper covers rock!'
//         }else{
//             playerScore++
//             return 'You won! Rock crushes scissors'
//         }
//     }else if(playerSelection == 'paper'){
//         if(computerSelection == 'scissors'){
//             compScore++
//             return 'You lose! Scissors cut paper'
//         }else{
//             playerScore++
//             return 'You win! Paper covers rock!'
//         }
//     }else if(playerSelection == 'scissors'){
//         if(computerSelection == 'rock'){
//             compScore++
//             return 'You lose! Rock crushes scissors'
//         }else{
//             playerScore++
//             return 'You win! Scissors cut paper!'
//         }
//     }
// }

// this is working code
// const play5Round = (playerSelection,getComputerChoice) => {
//     if (playerSelection === getComputerChoice)
//     {
//         return "It's a tie";
//     }
//     else if (playerSelection == 'Rock' && getComputerChoice =='Paper')
//     { 
//         return "You lose, paper covers rock";
//     }
//     else if (playerSelection == 'Paper' && getComputerChoice == 'Rock')
//         { return "You win, paper covers rock"; }
//     else if (playerSelection == 'Scissor' && getComputerChoice == 'Rock')
//     {
//         return "You lose, Rock beats scissor";
//     }
//     else if (playerSelection == 'Rock' && getComputerChoice == 'Scissor')
//         {return " You win, Rock beats scissor"}
//     else if (playerSelection == 'Paper' && getComputerChoice =='Scissor')
//     {
//         return "You lose, scissor cuts paper";
//     }
//     else { return " You win, scissor cuts paper"}
// }
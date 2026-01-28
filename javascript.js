let humanScore=0;
let computerScore=0;
let computerChoice;
let humanChoice;
function getComputerChoice(){
    let compu=(Math.floor(Math.random()*10))%3;
    if(compu==0){
        
        return "ROCK";
    }
    else if(compu==1){
        return "SCISSORS";
    }
    else{
        return "PAPER";
    }
}
function getHumanChoice(){
    let human=prompt("What is your choice?");
    return human.toUpperCase();
}


function playRound(humanChoice,computerChoice){
    
    console.log("ROUND");
    console.log(computerChoice);
    console.log(humanChoice);
    if(humanChoice==computerChoice){
        console.log("It is a tie!");
    }
    else if(humanChoice=="ROCK"&&computerChoice=="SCISSORS"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice=="ROCK"&&computerChoice=="PAPER"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice=="SCISSORS"&&computerChoice=="PAPER"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice=="SCISSORS"&&computerChoice=="ROCK"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(humanChoice=="PAPER"&&computerChoice=="ROCK"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice=="PAPER"&&computerChoice=="SCISSORS"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
}

for(let i=1;i<=5;i++){
    computerChoice=getComputerChoice();
    humanChoice=getHumanChoice();
    playRound(humanChoice,computerChoice)
}
console.log(humanScore);
console.log(computerScore);
if(humanScore>computerScore){
    console.log("You win!");
}
else{
    console.log("You lose!")
}
//const { createElement } = require("react");

const button1=document.createElement("button");
const button2=document.createElement("button");
const button3=document.createElement("button");
const body=document.querySelector("body");
button1.textContent="ROCK";
button2.textContent="SCISSORS";
button3.textContent="PAPER";
body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);
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






function playRound(humanChoice,computerChoice){
    const div=document.createElement("div");
    const p1=document.createElement("p");
    const p2=document.createElement("p");
    p1.textContent="ROUND: computerChoice:"+computerChoice+" humanChoice"+humanChoice;
    console.log("ROUND");
    console.log(computerChoice);
    console.log(humanChoice);
    if(humanChoice==computerChoice){
        console.log("It is a tie!");
        p2.textContent="It is a tie!";
    }
    else if(humanChoice=="ROCK"&&computerChoice=="SCISSORS"){
        console.log("You win! Rock beats Scissors");
        p2.textContent="You win! Rock beats Scissors";
        humanScore++;
    }
    else if(humanChoice=="ROCK"&&computerChoice=="PAPER"){
        console.log("You lose! Paper beats Rock");
        p2.textContent="You lose! Paper beats Rock";
        computerScore++;
    }
    else if(humanChoice=="SCISSORS"&&computerChoice=="PAPER"){
        console.log("You win! Scissors beats Paper");
        p2.textContent="You win! Scissors beats Paper";
        humanScore++;
    }
    else if(humanChoice=="SCISSORS"&&computerChoice=="ROCK"){
        console.log("You lose! Rock beats Scissors");
        p2.textContent="You lose! Rock beats Scissors";
        computerScore++;
    }
    else if(humanChoice=="PAPER"&&computerChoice=="ROCK"){
        console.log("You win! Paper beats Rock");
        p2.textContent="You win! Paper beats Rock";
        humanScore++;
    }
    else if(humanChoice=="PAPER"&&computerChoice=="SCISSORS"){
        console.log("You lose! Scissors beats Paper");
        p2.textContent="You lose! Scissors beats Paper";
        computerScore++;
    }
    div.appendChild(p1);
    div.appendChild(p2);
    body.appendChild(div);
}

button1.addEventListener("click",()=>{
    computerChoice=getComputerChoice();
    playRound("ROCK",computerChoice);
    checkScore();
});
button2.addEventListener("click",()=>{
    computerChoice=getComputerChoice();
    playRound("SCISSORS",computerChoice);
    checkScore();
});
button3.addEventListener("click",()=>{
    computerChoice=getComputerChoice();
    playRound("PAPER",computerChoice);
    checkScore();
});
function checkScore(){
    if(humanScore==5){
        const p3=document.createElement('p');
        p3.textContent="GAMEOVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR    humanScore: "+humanScore+" computerScore: "+computerScore+" You win!";
        body.appendChild(p3);
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
    }
    else if(computerScore==5){
        const p3=document.createElement('p');
        p3.textContent="GAMEOVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR    humanScore: "+humanScore+" computerScore: "+computerScore+" You lose!";
        body.appendChild(p3);
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
        //button.disabled ---->end this game
    }
}







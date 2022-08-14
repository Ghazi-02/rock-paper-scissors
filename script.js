
const rock = 0;
const paper = 1;
const scissors = 2
let playerScore = 0;
let computerScore = 0;
let tie = 0;


  
function getPlayerChoice(playerSelection) {
         
     if (playerSelection === 0) {
            return rock;
        } else if (playerSelection === 1) {
            return paper;
        } else if (playerSelection === 2) {
             return scissors;
        } 
    }




    function getComputerChoice() {

        const computerSelection = Math.floor((Math.random() * 3));

        if (computerSelection === 0) {
            return rock;
        } else if (computerSelection === 1) {
            return paper;
        } else if (computerSelection === 2) {
            return scissors;
        }

    }
 function playRound(playerChoice, computerChoice) {


     
    if( playerChoice === 0 && computerChoice ===0 ){
        return "Player chose: ROCK, CPU chose: ROCK \n!!DRAW!!"
    }else  if( playerChoice === 1 && computerChoice ===1 ){
        tie = tie+1;
        return "Player chose: PAPER, CPU chose: PAPER \n!!DRAW!!"
    }else  if( playerChoice === 2 && computerChoice === 2 ){
        tie = tie+1;
        return "Player chose: SCISSORS, CPU chose: SCISSORS. \n!!DRAW!!"
    }
    else if( playerChoice === 0 && computerChoice === 2 ){
        playerScore = playerScore+1;
        return "Player chose: ROCK, CPU chose : SCISSORS. \n!!!YOU WIN!!!"
    }else if( playerChoice === 1 && computerChoice === 0){
        playerScore = playerScore+1;
        return "Player chose: PAPER, CPU chose: ROCK. \n!!!YOU WIN!!!"
    }else if( playerChoice === 2 && computerChoice === 1){
        playerScore = playerScore+1;
        return "Player chose: SCISSORS, CPU chose: PAPER.\n!!!YOU WIN!!!"
    }
    else if( playerChoice === 0 && computerChoice === 1){
        computerScore = computerScore+1;
        return "Player chose: ROCK, CPU chose: PAPER. \n!YOU LOST!"
    }else if( playerChoice === 1 && computerChoice === 2){
        computerScore = computerScore+1;
        return "Player chose: PAPER, CPU chose: SCISSORS.\n!YOU LOST!"
    }else if( playerChoice === 2 && computerChoice === 0){
        computerScore = computerScore+1;
        return "Player chose: SCISSORS, CPU chose: ROCK. \n!YOU LOST!"
    }
         
  

 }
 

function game(){
 
    
  
   for(let round = 1; round < 6; round++){
   
    
    console.log("Round: " + round, " Wins: " + playerScore, " Losses: " + computerScore, " Draws: " + tie,);
    if(playerScore > computerScore && round > 4){
      return console.log("YOU HAVE BEATEN THE GAME!!!\nREFRESH TO TRY AGAIN");
      
    }else if(computerScore > playerScore && round > 4){
       return console.log("YOU HAVE LOST THE GAME!\nREFRESH TO TRY AGAIN");
       
 
    }else if(computerScore === playerScore && round > 4){
        return console.log("THE GAME IS A DRAW!!\nREFRESH TO TRY AGAIN");
  }
 }   
}



const btnRock= document.querySelector('#rock');
const btnPaper= document.querySelector('#paper');
const btnScissors= document.querySelector('#scissors');
    
      
        btnRock.addEventListener('click', ()=>{
   
            result.textContent=playRound(rock,getComputerChoice());
   
   });btnPaper.addEventListener('click', ()=>{

    result.textContent=playRound(paper,getComputerChoice());
 
    });btnScissors.addEventListener('click', ()=>{
   
        result.textContent= playRound(scissors,getComputerChoice());
     
    });


    
const result = document.querySelector('.result');
result.classList.toggle('result');


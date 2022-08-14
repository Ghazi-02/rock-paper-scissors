const result = document.querySelector('.result');
result.classList.toggle('result');
const rounds =document.querySelector('.rounds')
rounds.classList.toggle('rounds')

const rock = 0;
const paper = 1;
const scissors = 2
let playerScore =0;
let computerScore = 0;
let tie = 0;
let round = 0;

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

   
   rounds.textContent=`Round: ${ round}  Wins: ${playerScore}  Losses: ${computerScore}  Draws: ${tie}`
   
 if(playerScore > computerScore && round > 4){
    rounds.textContent="YOU HAVE BEATEN THE GAME!!!\nREFRESH TO TRY AGAIN";
    
  }else if(computerScore > playerScore && round > 4){
    rounds.textContent="YOU HAVE LOST THE GAME!\nREFRESH TO TRY AGAIN";
     

  }else if(computerScore === playerScore && round > 4){
    rounds.textContent="THE GAME IS A DRAW!!\nREFRESH TO TRY AGAIN";
}
   
   else if( playerChoice === 0 && computerChoice ===0 ){
    round= round+1;   
    tie = tie+1;
        return "Player chose: ROCK, CPU chose: ROCK \n!!DRAW!!"
    }else  if( playerChoice === 1 && computerChoice ===1 ){
        round= round+1;
        tie = tie+1;        
        return "Player chose: PAPER, CPU chose: PAPER \n!!DRAW!!"
    }else  if( playerChoice === 2 && computerChoice === 2 ){
        round=round+1;
        tie = tie+1;
        return "Player chose: SCISSORS, CPU chose: SCISSORS. \n!!DRAW!!"
    }
    else if( playerChoice === 0 && computerChoice === 2 ){
        round=round+1;
        playerScore = playerScore+1;
        return "Player chose: ROCK, CPU chose : SCISSORS. \n!!!YOU WIN!!!"
    }else if( playerChoice === 1 && computerChoice === 0){
        round=round+1;
        playerScore = playerScore+1;
        return "Player chose: PAPER, CPU chose: ROCK. \n!!!YOU WIN!!!"
    }else if( playerChoice === 2 && computerChoice === 1){
        round=round+1;
        playerScore = playerScore+1;
        return "Player chose: SCISSORS, CPU chose: PAPER.\n!!!YOU WIN!!!"
    }
    else if( playerChoice === 0 && computerChoice === 1){
        round=round+1;
        computerScore = computerScore+1;
        return "Player chose: ROCK, CPU chose: PAPER. \n!YOU LOST!"
    }else if( playerChoice === 1 && computerChoice === 2){
        round=round+1;
        computerScore = computerScore+1;
        return "Player chose: PAPER, CPU chose: SCISSORS.\n!YOU LOST!"
    }else if( playerChoice === 2 && computerChoice === 0){
        round=round+1;
        computerScore = computerScore+1;
        return "Player chose: SCISSORS, CPU chose: ROCK. \n!YOU LOST!"
    }}



 

function game(){
 
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
  
}


game()

function reset(){ rounds.textContent=`Round: ${ round=0}  Wins: ${playerScore=0}  Losses: ${computerScore=0}  Draws: ${tie=0}`
}

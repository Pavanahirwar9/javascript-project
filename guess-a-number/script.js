'use strict';

let  secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore;
const displayMessage= function(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess= Number( document.querySelector('.guess').value);
  console.log(guess,typeof guess);
  if(!guess){
    // document.querySelector('.message').textContent= 'no number!';
    displayMessage ('🤷‍♂️ no number');
  }
  //when player win 
  else if(guess===secretNumber){
    // document.querySelector('.message').textContent='correct Number!'; 
    displayMessage('🏆currect number');
    document.querySelector('.number').textContent= secretNumber; 
    
    document.querySelector('body').style.backgroundColor= ' #60b347';
    document.querySelector('.number').style.width= '30rem';
if(score>secretNumber){
  highscore=score;
  document.querySelector('.highscore').textContent=highscore;
}
  }
  //this for player to high 
  else if(guess!==secretNumber){
  // this for player to high
  if (guess>secretNumber){
    if(score>0){
      document.querySelector('.message').textContent= '📈Too high!';
      score--;
      document.querySelector('.score').textContent= score;
    }
    else{
      document.querySelector('.message').textContent= '👌you lose the game';
    }
    
  }
  //this is for player to low
  else if(guess< secretNumber){
    if(score>0){
      document.querySelector('.message').textContent= '📉Too low!';
      score--;
      document.querySelector('.score').textContent= score;
    }
    else{
      document.querySelector('.message').textContent= '👌you lose the game';
    }
    

  }
 
}});

document.querySelector('.again').addEventListener('click', function (){
  score=20;
  secretNumber= Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent='start guessing....';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';

document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width= '15rem';

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
 
  document.querySelector('.message').textContent = 'Start guessing...';
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

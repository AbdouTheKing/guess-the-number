let randomNumber = Math.floor(Math.random() * 100) + 1 ;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHight = document.querySelector('.lowOrHight');
let counter = document.querySelector('.chances')

let guessSubmit = document.querySelector('.guessSubmit');
let guessfield = document.querySelector('.guessField');


let guessCount = 9
// guessCount--;
let restButton;
// guessSubmit.querySelector('click', checkGuess);
var input = document.querySelector(".guessField");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector(".guessSubmit").click();
  }
});

function checkGuess (){
    let userGuess = Number(guessfield.value);
    
      counter.textContent = ` Your remaining attempts : ${guessCount}  ` ;
      
      guesses.textContent  += userGuess + ' ' ;

    
    if (userGuess === randomNumber && guessCount >= 8){

        lastResult.textContent = 'Great! You guessed right you are Genius 😎';
        lastResult.style.backgroundColor = 'rgba(0, 128, 0, 0.473)'
        lastResult.style.fontSize = 'smaller'
        lastResult.
        // lowOrHight.textContent = '';
       
        setGameOver();

    }

    else if(userGuess === randomNumber && guessCount <= 7){

            lastResult.textContent = `Congratulations you won after `+ `${guessCount = 10 - guessCount}`+` attempts 👌`;
            lastResult.style.backgroundColor = 'green'
            lastResult.style.fontSize = 'smaller'
   
        setGameOver();
         }
    
    else if  (guessCount === 0) {
        lastResult.textContent = ' ! Game over ! Try again';
        lastResult.style.backgroundColor = 'red'
        setGameOver();

    } if (userGuess < randomNumber ) {
            lowOrHight.textContent = ' The number you guessed was too low 😢';
            lowOrHight.style.backgroundColor = 'rgba(255, 255, 0, 0.397)'
            lowOrHight.style.Color = 'black'
        } else if (userGuess > randomNumber) {

            lowOrHight.textContent = 'The number you guessed was too high 🤔';
            lowOrHight.style.backgroundColor = 'rgba(255, 166, 0, 0.418)'

        }
    
        
    

        

    

    guessCount--;
    guessfield.value = '';
    guessfield.focus();
        
    
}guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = false;
    guessSubmit.disabled = false;
    ; 
     window.location.reload();
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  
  }


  function resetGame()  {
    window.location.reload();
  }





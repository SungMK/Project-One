/*----- constants -----*/
const cardFronts = { 
    [img: ]
}

/*----- state variables -----*/
let lives; 
let score;
let guess;

/*----- cached elements  -----*/
const livesEl = document.querySelector('')

/*----- event listeners -----*/


/*----- functions -----*/
initialize(); // Game is set immediately when browser loads

function initialize() {  // Default config for game. Used when game starts and when game is reset.
    lives = 3;
    score = 0;
    guess = null;    
}

function addAPoint() {
    if(guess === "You found a matching card!") {
        return score +1;
    }
}

score = addAPoint(score);

function loseALife() {
    if(guess === "Wrong Guess! Try again!") {
        return lives -1;
    }
}

lives = loseALife(lives);

function render() {

}
/* At the end 
function resetGame() {
    if(lives > 0) {
        playAgainBtn.style.visibility = 'hidden';
    } else { 
        playAgainBtn.style.visibility = 'visible';
    }
    
}
*/


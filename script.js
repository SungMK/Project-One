/*----- Constants -----*/
const cardFronts = [ // Array of objects with each object representing a card front face
  {img: './Card Face Images/Fronts/hearts_2.svg'}, // Idx 0
  {img: './Card Face Images/Fronts/hearts_2.svg'}, // Idx 1
  {img: './Card Face Images/Fronts/diamonds_4.svg'}, // Idx 2
  {img: './Card Face Images/Fronts/diamonds_4.svg'}, // Idx 3
  {img: './Card Face Images/Fronts/diamonds_7.svg'}, // Idx 4
  {img: './Card Face Images/Fronts/diamonds_7.svg'}, // Idx 5
  {img: './Card Face Images/Fronts/hearts_8.svg'}, // Idx 6
  {img: './Card Face Images/Fronts/hearts_8.svg'}, // Idx 7
  {img: './Card Face Images/Fronts/diamonds_10.svg'}, // Idx 8
  {img: './Card Face Images/Fronts/diamonds_10.svg'} // Idx 9
];

// /*----- State Variables -----*/
let lives = 3;
let score = 0;
let firstCard = null;
let secondCard = null;
let message;

// /*----- Cached Elements  -----*/
const cardEls = document.querySelectorAll('.card'); 
const displayLives = document.querySelector('#lives'); 
const displayScore = document.querySelector('#score'); 
const displayMessage = document.querySelector('#message'); 
const playAgainBtn = document.querySelector('button'); 

/*----- Event Listeners -----*/
cardEls.forEach((card, cardIndexValue) => { 
  card.addEventListener('click', handleCardClick(card, cardIndexValue));
});

playAgainBtn.addEventListener('click', initialize); 

/*----- Functions -----*/
initialize(); // Game starts automatically 

function initialize() { // Sets the default values at the start of the game and also doubles as a reset function.
  lives = 3;
  score = 0;
  firstCard = null;
  secondCard = null;

  resetCardImages(); 

  displayLives.textContent = 'Lives: 3'; 
  displayScore.textContent = 'Score: 0'; 
  displayMessage.textContent = 'Click any card to begin!';
}

function handleCardClick(card, cardIndexValue) { // Callback function for Event Listener that takes 'card' and 'cardIndexValue' as parameters.
  return () => { 
    const clickedCard = cardFronts[cardIndexValue]; // Variable created to store img src of card that player clicked
    card.setAttribute('src', clickedCard.img); // Clicked card is updated with the img of the corresponding index of the array
      
    if (firstCard === null) { // Checks if player has clicked a card
      firstCard = clickedCard; // If the player has not clicked a card, then the value of clickedCard is assigned to firstCard
    } else if (secondCard === null) { // If the player has clicked a card (i.e. the first card) then the next clicked card is assigned to the variable secondCard
      secondCard = clickedCard; 
  
      if (firstCard.img === secondCard.img) { // If the imgs of the firstCard and secondCard match, then it will run handleCardMatch
        handleCardMatch();
      } else { // If the imgs do not match, then it will run handleWrongMatch
        handleWrongMatch(card);
      }
    }
  }
}

function handleCardMatch() {
  score+=1; 
  firstCard = null; // firstCard variable is reset to null so player can select new card
  secondCard = null; // secondCard variable is also reset to null so player can select new card
  displayMessage.textContent = "It's a match!"; // The 'Message' section will update
  displayScore.textContent = `Score: ${score}`; // Score section will update to display the current score
  
  playerWins(); // Function invoked and checks if win condition met; game continues if not met
}

function handleWrongMatch(card) {
  lives -=1; 
  displayMessage.textContent = 'Wrong Guess! Try again!'; // The 'Message section will update
  displayLives.textContent = `Lives: ${lives}`; // Score section will update to display current number of lives
  setTimeout(() => { 
    card.setAttribute('src', './Card Face Images/Back/blue2.svg'); // Sets the clicked card's img back to the default
    const firstCardEl = document.querySelector(`[src="${firstCard.img}"]`); // firstCardEl created to store the value of the element matching the value of firstCard (The first card clicked by the player)
    firstCardEl.setAttribute('src', './Card Face Images/Back/blue2.svg'); // Sets the img of the first card clicked by the player back to the default card back face
    firstCard = null; // Resets value of firstCard to null (i.e. no card picked)
    secondCard = null; // Resets value of secondCard to null (i.e. no card picked)

    playerLoses(); // Function invoked and checks if lose condition met; game continues if not met
  }, 1500);
}

function playerWins() {
  if (score === 5) { 
    displayMessage.textContent = 'Congratulations! You win!!!'; // If score is equal to 5, the 'Message' section will update
    setTimeout(() => { // After displaying the message, setTimeout will run intialize after 3 seconds
      initialize(); 
    }, 3000);
  }
}

function playerLoses() { 
  if (lives === 0) { 
    displayMessage.textContent = 'You have no more lives! You lose!'; // If lives are equal to 0, the 'Message' section will update
    setTimeout(() => { // After displaying the message, setTimeout will run initialize after 3 seconds
      initialize(); 
    }, 3000);
  }
}

function resetCardImages() { // Resets card images by looping through each card and updating each imc src to default using setAttribute
  cardEls.forEach(card => { 
    card.setAttribute('src', './Card Face Images/Back/blue2.svg');  
  });
}
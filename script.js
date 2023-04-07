/*----- Constants -----*/
const cardFronts = [ // Creates an array of objects with each object representing a card front face
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
const cardEls = document.querySelectorAll('.card'); // Selects all elements with the 'card' class and stores them in a variable called cardEls
const displayLives = document.querySelector('#lives'); // Selects the HTML 'lives' id and stores it in a variable called displayLives
const displayScore = document.querySelector('#score'); // Selects the HTML 'score' id and stores it in a variable called displayScore
const displayMessage = document.querySelector('#message'); // Selects the HTML 'message' id and stores it in a variable called displayMessage
const playAgainBtn = document.querySelector('button'); // Selects the HTML btn element and assigns it to a variable called playAgainBtn

/*----- Event Listeners -----*/
cardEls.forEach((card, cardIndexValue) => { 
  card.addEventListener('click', handleCardClick(card, cardIndexValue));
});

playAgainBtn.addEventListener('click', initialize); // This adds an event listener to the "Play Again" button so that when a 'click' is registered, it calls the initialize function, which resets the game.

/*----- Functions -----*/
initialize(); // When the initialize function is invoked, it starts the game. 

function initialize() { // This function sets the values at the start of the game and also doubles as a reset function for when the game is reset automatically or when the player clicks the "Play Again" button.
  lives = 3;
  score = 0;
  firstCard = null;
  secondCard = null;

  resetCardImages(); // This function resets the img srcs for every card

  displayLives.textContent = 'Lives: 3'; // Rather than hard coding the HTML with the strings of text, it will be updated when the game initializes
  displayScore.textContent = 'Score: 0'; 
  displayMessage.textContent = 'Click any card to begin!';
}

function handleCardClick(card, cardIndexValue) { // Callback function for Event Listener that takes 'card' and 'cardIndexValue' as parameters.
  return () => { // Returns anonymous function
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
  score+=1; // Score is incremented by 1
  firstCard = null; // firstCard variable is reset to null so player can select new pair of cards
  secondCard = null; // secondCard variable is also reset to null so player can select new pair of cards
  displayMessage.textContent = "It's a match!"; // The 'Message' section will update to "It's a match!"
  displayScore.textContent = `Score: ${score}`; // Score section will update to display the current score
  
  playerWins(); // Function is invoked and checks if the score is set to 5. If it's not equal to 5, nothing happens and the game continues; but, if the score is equal to 5, the function is executed
}

function handleWrongMatch(card) {
  lives -=1; // Score is decremented by 1
  displayMessage.textContent = 'Wrong Guess! Try again!'; // The 'Message section will update to 'Wrong Guess! Try again!'
  displayLives.textContent = `Lives: ${lives}`; // Score section will update to display current number of lives
  setTimeout(() => { 
    card.setAttribute('src', './Card Face Images/Back/blue2.svg'); // Sets the clicked card's img back to the default
    const firstCardEl = document.querySelector(`[src="${firstCard.img}"]`); // firstCardEl created to store the value of the element matching the value of firstCard (The first card clicked by the player)
    firstCardEl.setAttribute('src', './Card Face Images/Back/blue2.svg'); // Sets the img of the first card clicked by the player back to the default card back face
    firstCard = null; // Resets value of firstCard to null (i.e. no card picked)
    secondCard = null; // Resets value of secondCard to null (i.e. no card picked)

    playerLoses(); 
  }, 1500);
}

function playerWins() {
  if (score === 5) { // Checks if score is equal to 5
    displayMessage.textContent = 'Congratulations! You win!!!'; // If score is equal to 5, the 'Message' section will update to 'Congratulations! You win!'
    setTimeout(() => { // After displaying the message, setTimeout will run intialize after 3 seconds
      initialize(); // Initialize function invoked
    }, 3000);
  }
}

function playerLoses() { 
  if (lives === 0) { // Checks if lives are equal to 0
    displayMessage.textContent = 'You have no more lives! You lose!'; // If lives are equal to 0, the 'Message' section will update to 'You have no more lives! You lose!'
    setTimeout(() => { // After displaying the message, setTimeout will run initialize after 3 seconds
      initialize(); // Initialize function invoked
    }, 3000);
  }
}

function resetCardImages() { // This function resets the card images back to the default back face
  cardEls.forEach(card => { // Loops through each card and updates every img src to default img using setAttribute
    card.setAttribute('src', './Card Face Images/Back/blue2.svg');  
  });
}
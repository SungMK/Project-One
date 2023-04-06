/*----- Constants -----*/
const cardFronts = [
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

playAgainBtn.addEventListener('click', initialize); // This adds an event listener to the "Play Again" button so that when a 'click' is registered, it calls the initialize function, which resets the game.

/*----- Functions -----*/
initialize(); // When the initialize function is invoked, it starts the game. 

function initialize() { // This function sets the values at the start of the game and also doubles as a reset function for when the game is reset automatically or when the player clicks the "Play Again button".
  lives = 3;
  score = 0;
  firstCard = null;
  secondCard = null;

  resetCardImages(); // This function resets the img srcs for every card

  displayLives.textContent = 'Lives: 3'; // Rather than hard coding the HTML with the strings of text, it will just be updated when the game initializes
  displayScore.textContent = 'Score: 0'; 
  displayMessage.textContent = 'Click any card to begin!';
}

function handleCardClick(card, cardIndexValue) {
  return () => {
    const clickedCard = cardFronts[cardIndexValue];
    card.setAttribute('src', clickedCard.img);
      
    if (firstCard === null) {
      firstCard = clickedCard;
    } else if (secondCard === null) {
      secondCard = clickedCard;
  
      if (firstCard.img === secondCard.img) {
        handleCardMatch();
      } else {
        lives-=1;
        setTimeout(() => {
          card.setAttribute('src', './Card Face Images/Back/blue2.svg');
          const firstCardEl = document.querySelector(`[src="${firstCard.img}"]`);
          firstCardEl.setAttribute('src', './Card Face Images/Back/blue2.svg');
          firstCard = null;
          secondCard = null;
          displayMessage.textContent = `${'Wrong Guess! Try again!'}`;
          displayLives.textContent = `Lives: ${lives}`;
          playerLoses();
        }, 1500);
      }
    }
  }
}

function handleCardMatch() {
  score+=1;
  firstCard = null;
  secondCard = null;
  displayMessage.textContent = `${"It's a match!"}`;
  displayScore.textContent = `Score: ${score}`;

  playerWins();
}

function playerWins() {
  if (score === 5) {
    displayMessage.textContent = `${'Congratulations! You win!'}`;
    setTimeout(() => {
      initialize();
    }, 3000);
  }
}

function playerLoses() {
  if (lives === 0) {
    displayMessage.textContent = `${'You have no more lives! You lose!'}`;
    setTimeout(() => {
      initialize();
    }, 3000);
  }
}

function resetCardImages() { // This function resets the card images back to the default back face.
  cardEls.forEach(card => {
    card.setAttribute('src', './Card Face Images/Back/blue2.svg');  // Instead of hard coding the img src into each of the cards in the HTML, the card img srcs will just be updated in the JavaScript. 
  });
}
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
  card.addEventListener('click', () => {
  handleClick(card, cardIndexValue);
  });
})

playAgainBtn.addEventListener('click', resetGame);

/*----- Functions -----*/
initialize();

function initialize() {
  lives = 3;
  score = 0;
  firstCard = null;
  secondCard = null;

  revertToCardBackDefault();

  cardEls.forEach((card, cardIndexValue) => {
    card.addEventListener('click', handleCardClick(card, cardIndexValue));
  });
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

function handleCardMismatch() {
  

}

function playerWins() {
  if (score === 5) {
    displayMessage.textContent = `${'Congratulations! You win!'}`;
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
};

function playerLoses() {
  if (lives === 0) {
    displayMessage.textContent = `${'You have no more lives! You lose!'}`;
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
}

function revertToCardBackDefault() {
  cardEls.forEach(card => {
    card.setAttribute('src', './Card Face Images/Back/blue2.svg');
  });
}

function resetGame() {
  lives = 3;
  score = 0;
  firstCard = null;
  secondCard = null;

  revertToCardBackDefault();

  displayLives.textContent = `${'Lives: 3'}`;
  displayScore.textContent = `${'Score: 0'}`;
  displayMessage.textContent = `${'Click any card to begin!'}`;
}

// function resetGame() {
//   initialize();
// }
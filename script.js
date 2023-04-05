/*----- constants -----*/
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

// /*----- state variables -----*/
let lives = 3;
let score = 0;
let firstCard = null;
let secondCard = null;
let guess = '';

// /*----- cached elements  -----*/
const cardEls = document.querySelectorAll('.card');
const displayLives = document.querySelector('#lives');
const displayScore = document.querySelector('#score');
const displayGuess = document.querySelector('#guess');
const playAgainBtn = document.querySelector('button');

/*----- event listeners -----*/
// playAgainBtn.addEventListener('click, );

cardEls.forEach((card, cardIndexValue) => {
    card.addEventListener('click', () => {
      const clickedCard = cardFronts[cardIndexValue];
      card.setAttribute('src', clickedCard.img);
      
      if (firstCard === null) {
        firstCard = clickedCard;
      } else if (secondCard === null) {
        secondCard = clickedCard;
  
        if (firstCard.img === secondCard.img) {
          score+=1;
          firstCard = null;
          secondCard = null;
          displayGuess.textContent = `Guess: ${"It's a match!"}`;
          displayScore.textContent = `Score: ${score}`;
        } else {
          lives-=1;
          setTimeout(() => {
            card.setAttribute('src', './Card Face Images/Back/blue2.svg');
            const firstCardEl = document.querySelector(`[src="${firstCard.img}"]`);
            firstCardEl.setAttribute('src', './Card Face Images/Back/blue2.svg');
            firstCard = null;
            secondCard = null;
            displayGuess.textContent = `Guess: ${'Wrong Guess! Try again!'}`;
            displayLives.textContent = `Lives: ${lives}`;
          }, 1500);
        }
      }
    });
});
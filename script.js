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

// /*----- cached elements  -----*/
const cardEls = document.querySelectorAll('.card');
const playAgainBtn = document.querySelector('button');
// const livesEl = document.querySelector('')

/*----- event listeners -----*/
// playAgainBtn.addEventListener('click', initialize);

cardEls.forEach((card, cardIndexValue) => {
    card.addEventListener('click', () => {
        const clickedCard = cardFronts[cardIndexValue];
        card.setAttribute('src', clickedCard.img);

        // if (firstCard === null) {
        //     firstCard = clickedCard;
        // } else if (secondCard === null) {
        //     secondCard = clickedCard;
        // }
    })
})

// function checkForMatch () {
//     if (firstChoice === secondChoice) {
//         return addPoint();
//     } else {
//         setTimeout(() => {
//             card.setAttribute('src', './Card Face Images/Back/blue2.svg');
//         }, 1500);
//         return loseLife();
//     }

/*----- functions -----*/
// initialize(); // Game is set immediately when browser loads
# Concentration Game

## What is concentration?
Concentration is a memory game where a number of cards are arranged in a grid, face down. Each card has a picture or symbol on it, and the goal is to match pairs until there are no more cards left. While typically played using playing cards, it can also be played using a specific theme. The game can be played individually or against multiple players. 

### PseudoCode
- The page will load, and the game will automatically initialize.
- The player will click on a card, flipping the card around to reveal its value (e.g. Ace, 2, 3, 4, etc). 
- The player will then choose a second card, flipping and revealing its value.
- If the values match, then both cards will remain faced up, and the "Guess" section will update to "Correct!" and the player can continue to match cards.
- If the values do not match, the "Guess" section will update to "Wrong Guess! Try again!". 
    - There will be a brief delay to allow players to take note of the values using setTimeout().
    - Then, the cards will return to the "face down" state, allowing the player to attempt to match a pair again.
    - In addition to the message being displayed, the player will lose a life from the desiginated "Lives" section. 
        - If and when a player has lost all their lives (i.e., lives reaches 0), a message will appear stating "You lost!", and a "Play Again!" button will appear.
            - If and when the player clicks this button, the game will reset, the cards will shuffle, and the player can start again with the maximum number of lives again.
- Once a player has correctly identified every matching pair, a message will appear stating, "Congratulations! You win!", and a "Play Again!" button will appear.
    - If and when the player clicks this button, the game will reset, the cards will shuffle, and the player can start again with the maximum number of lives again.

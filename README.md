Coding Challenge: World’s Simplest Poker
===
## Install instructions
* `git clone` the repository to your machine.
* Run `npm install` or `yarn install` to setup dependencies.
* Run `yarn start` or `npm start` to start the development server
* Run `yarn` or `npm test` to run the test suite :frowning:

## Tech Stack
* React
* Styled Components
* Vanilla JavaScript for Game Logic
* Webpack and Babel
* Jest for Testing

### The challenge

Build a very simple card game, played between two or more players. Immediately after the

cards are dealt, the player with the highest hand wins.

Wait, what?

We want you to build an application that shuffles a standard 52-card deck, and then deals a

fixed number of cards to each player.

After each player has been dealt their cards, add up the value of each hand and declare a

winner (or winners, in the case of a draw).

Score each hand by summing the face value of each card (for Ace through ten), and the

following values for face cards: Jack = 11, Queen = 12, King = 13.

The number of players should be configurable, as should the number of cards dealt. The

game should prevent an impossible combination of players and cards.

The basic solution doesn’t need a user interface beyond inputs (e.g. number of players) and

outputs (e.g. winning player).

### Go for gold

If you want to add a little pizzazz, add some bonus features –

● HTML user interface to input variables and display each player’s hand.

● Sort each player’s hand after dealing, using card suit followed by value. (Descending

suit order is Hearts, Spades, Diamonds, Clubs).

● Enhance the scoring system by giving a bonus of 10 points for each pair, 20 points

for each three of a kind, 40 points for a straight. (Each card can only be used once

per combination).

● Tie-breaker: use card suit to determine an overall winner.

### Rules

You can use any technology, language or tools of your choice.

We should be able to run the software on our own computers, so please include instructions

for how to download, build and run the app.

'We’ll be looking at how the code works, as well as how it’s structured and commented.'.

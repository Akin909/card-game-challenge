//===========================================================
// Data/Card Structure
//===========================================================
//Create a class with the all card types and their values
class Suite {
  constructor(props) {
    this.jack = { number: 1, value: 11 };
    this.queen = { number: 1, value: 12 };
    this.king = { number: 1, value: 13 };
    this.ace = { number: 1, value: 1 };
    this.two = { number: 1, value: 1 };
    this.three = { number: 1, value: 1 };
    this.four = { number: 1, value: 1 };
    this.five = { number: 1, value: 1 };
    this.six = { number: 1, value: 1 };
    this.seven = { number: 1, value: 1 };
    this.eight = { number: 1, value: 1 };
    this.nine = { number: 1, value: 1 };
    this.ten = { number: 1, value: 1 };
  }
}
// Use above class to create a deck object containing 52 cards in their
// respective suites
export const Deck = {
  spades: new Suite('spades'),
  hearts: new Suite('diamonds'),
  clubs: new Suite('clubs'),
  diamonds: new Suite('diamonds'),
};
export const replay = [];

//===========================================================
// Helper functions
//===========================================================
//Return a random number based on size of a given array
export const pickAtRandom = array => Math.floor(Math.random() * array.length);

//Sum elements of an array
export const sum = arr => arr.reduce((current, next) => current + next);

//Arrange cards using a sorting object which stores their
//priorities and checks them in the sort
const sort = ['hearts', 'spades', 'diamonds', 'clubs'];
export const sortScores = (arr, sort) => {
  const defaultValue = Infinity;
  const sortObj = sort.reduce((acc, suite, i) => {
    acc[suite] = i + 1;
    return acc;
  }, {});
  return arr.map(eachArr =>
    eachArr.sort(
      (card, nextCard) =>
        (sortObj[card.suite] || defaultValue) -
        (sortObj[nextCard.suite] || defaultValue)
    )
  );
};

export const isUnique = array => array.length === new Set(array).size;

export const determineWinner = (array, objArray) =>
  //check if there are any duplicate scores if so return a tie, else compare
  //the max score with the player name and return the winning player name
  isUnique(array)
    ? 'Tie'
    : objArray.reduce(
        (value, nextVal) =>
          value.score === Math.max(...array) ? value.player : nextVal.player
      );

//Returns a chunked array based on a given size, it is used to create an array of subarrays which are each players hand
export const chunkAnArray = (array, chunkSize) =>
  array
    .map(
      (element, index) =>
        index % chunkSize === 0 ? array.slice(index, index + chunkSize) : null
    )
    .filter(element => element);

//=======================================================
// Card Game Core Logic
//=======================================================
const cardTypes = Object.keys(Deck.spades);
const suiteTypes = Object.keys(Deck);

/**
 * Shuffles out specified number of cards at random
 *
 * @param {Object} deck Object representing pack of cards
 * @param {Integer} noOfCards number of cards to be dealt
 * @param {Array} hand array of cards that have been dealt
 * @param {Integer} players number of players
 * @returns {Object} Updated deck and hands dealt
 */
export const dealCards = (deck, noOfCards, hand, players) => {
  if (players * noOfCards > 52) {
    return new Error(`There won't be enough cards for everybody 🙇🏾`);
  }
  const chosenSuite = suiteTypes[pickAtRandom(suiteTypes)];
  const chosenKey = cardTypes[pickAtRandom(cardTypes)];
  replay.push(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
  const selectedCard = deck[chosenSuite][chosenKey];
  selectedCard !== 0 ? (selectedCard.number = 0) : dealCards(deck);
  hand.push({
    description: `${chosenKey} of ${chosenSuite}`,
    suite: chosenSuite,
    chosenKey,
    value: selectedCard.value,
  });
  return {
    deck,
    hand,
  };
};
export const calculateScore = (hand, players) => {
  const chunkSize = hand.length / players;
  const allScores = chunkAnArray(hand, chunkSize);
  const cardValues = allScores.map(arr => arr.map(card => card.value));
  const numericalScores = cardValues.map(sum);
  //Matches the scores to the players
  const eachScore = numericalScores.map((score, i) => ({
    player: `Player ${i + 1}`,
    score,
  }));

  return {
    eachScore,
    winner: determineWinner(numericalScores, eachScore),
    sorted: sortScores(allScores, sort),
  };
};

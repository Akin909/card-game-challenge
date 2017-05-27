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
//Return a random number based on size of a given array
export const pickAtRandom = array => Math.floor(Math.random() * array.length);
// Use above class to create a deck object containing 52 cards in their
// respective suites
export const Deck = {
  spades: new Suite('spades'),
  hearts: new Suite('diamonds'),
  clubs: new Suite('clubs'),
  diamonds: new Suite('diamonds'),
};
export const replay = [];

const cardTypes = Object.keys(Deck.spades);
const suiteTypes = Object.keys(Deck);

export const dealCards = (deck, noOfCards, hand, players) => {
  if (players * noOfCards > 52) {
    return new Error("There won't be enough cards for everybody 🙇🏾");
  }
  const chosenSuite = suiteTypes[pickAtRandom(suiteTypes)];
  const chosenKey = cardTypes[pickAtRandom(cardTypes)];
  replay.push(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
  //Check the deck for a random card in a suite if present remove it otherwise
  //the function calls itself and searches for a card that is still available
  deck[chosenSuite][chosenKey] !== 0
    ? (deck[chosenSuite][chosenKey].number = 0)
    : dealCards(deck);
  hand.push({
    description: `${chosenKey} of ${chosenSuite}`,
    suite: chosenSuite,
    chosenKey,
    value: deck[chosenSuite][chosenKey].value,
  });
  return {
    deck,
    hand,
  };
};

//Sum elements of an array
export const sum = arr => arr.reduce((current, next) => current + next);

const sort = ['hearts', 'spades', 'diamonds', 'clubs'];
const sortObj = {};
const defaultValue = Infinity;
sort.forEach((suite, i) => (sortObj[suite] = i + 1));
//Phew was a toughie, arrange cards using a sorting object which stores their
//priorities and checks them in the sort
export const sortScores = (arr, sortObj) =>
  arr.map(eachArr =>
    eachArr.sort(
      (card, nextCard) =>
        (sortObj[card.suite] || defaultValue) -
        (sortObj[nextCard.suite] || defaultValue)
    )
  );

export function checkDuplicates(array) {
  return array.every(el => array.indexOf(el) !== array.lastIndexOf(el));
}
export const determineWinner = (array, objArray) =>
  //check if there are any duplicate scores if so return a tie, else compare
  //the max score with the player name and return the winning player name
  checkDuplicates(array)
    ? 'Tie'
    : objArray.reduce(
        (value, nextVal) =>
          value.score === Math.max(...array) ? value.player : nextVal.player
      );
export function chunkAnArray(array, chunkSize) {
  return array
    .map((element, index) => {
      return index % chunkSize === 0
        ? array.slice(index, index + chunkSize)
        : null;
    })
    .filter(element => element);
}
export const calculateScore = (hand, players) => {
  const totalScore = hand.reduce((sum, card) => sum + card.value, 0);
  const chunkSize = hand.length / players;
  //All scores returns a 2d array of each players hand
  const allScores = chunkAnArray(hand, chunkSize);
  const cardValues = allScores.map(arr => arr.map(card => card.value));
  const sorted = sortScores(allScores, sortObj);
  const numericalScores = cardValues.map(sum);
  //Matches the scores to the players
  const eachScore = numericalScores.map((score, i) => ({
    ['player']: `Player ${i + 1}`,
    score,
  }));
  const winner = determineWinner(numericalScores, eachScore);

  return {
    eachScore,
    winner,
    sorted,
  };
};

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

const pickAtRandom = array => Math.floor(Math.random() * array.length);

export const Deck = {
  spades: new Suite('spades'),
  hearts: new Suite('diamonds'),
  clubs: new Suite('clubs'),
  diamonds: new Suite('diamonds'),
};
export const replay = [];
export const hand = [];

const cardTypes = Object.keys(Deck.spades);
const suiteTypes = Object.keys(Deck);

export const dealCards = (deck, noOfCards, hand, players) => {
  if (players * noOfCards > 52) return new Error('There won\'t be enough cards for everybody 🙇');
  //TODO refactor as these are recreated each time
  const chosenSuite = suiteTypes[pickAtRandom(suiteTypes)];
  const chosenKey = cardTypes[pickAtRandom(cardTypes)];
  replay.push(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
  deck[chosenSuite][chosenKey] !== 0
    ? (deck[chosenSuite][chosenKey].number = 0)
    : dealCards(deck);
  hand.push({
    description: `${chosenKey} of ${chosenSuite}`,
    value: deck[chosenSuite][chosenKey].value,
  });
  return {
    deck,
    hand,
  };
};

const sum = arr => arr.reduce((current, next) => current + next);

export const determineWinner = (array, objArray) =>
  array.every(el => array.indexOf(el) !== array.lastIndexOf(el))
    ? 'Tie'
    : objArray.reduce(
        (value, nextVal) =>
          value.score === Math.max(...array) ? value.player : nextVal.player
      );

export const calculateScore = (hand, players) => {
  const totalScore = hand.reduce((sum, card) => sum + card.value, 0);
  const chunkSize = hand.length / players;
  const allScores = hand
    .map(
      (hands, i) => (i % chunkSize === 0 ? hand.slice(i, i + chunkSize) : null)
    )
    .filter(hands => hands);
  const cardValues = allScores.map(arr => arr.map(card => card.value));
  const numericalScores = cardValues.map(sum);
  const eachScore = numericalScores.map((score, i) => ({
    ['player']: `Player ${i + 1}`,
    score,
  }));
  const winner = determineWinner(numericalScores, eachScore);

  return {
    eachScore,
    winner,
    allScores,
  };
};

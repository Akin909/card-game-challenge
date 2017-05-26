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

export const dealCards = (deck, noOfCards, aHand) => {
  //TODO refactor as these are recreated each time
  const chosenSuite = suiteTypes[pickAtRandom(suiteTypes)];
  const chosenKey = cardTypes[pickAtRandom(cardTypes)];
  replay.push(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
  deck[chosenSuite][chosenKey] !== 0
    ? (deck[chosenSuite][chosenKey].number = 0)
    : dealCards(deck);
  aHand.push({
    description: `${chosenKey} of ${chosenSuite}`,
    value: deck[chosenSuite][chosenKey].value,
  });
  return {
    deck,
    hand: aHand,
  };
};

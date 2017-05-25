class Suite {
  constructor(props) {
    this.jack = 1;
    this.queen = 1;
    this.king = 1;
    this.ace = 1;
    this.two = 1;
    this.three = 1;
    this.four = 1;
    this.five = 1;
    this.six = 1;
    this.seven = 1;
    this.eight = 1;
    this.nine = 1;
    this.ten = 1;
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


export const dealCards = deck => {
  //TODO refactor as these are recreated each time
  const chosenSuite = suiteTypes[pickAtRandom(suiteTypes)];
  const chosenKey = cardTypes[pickAtRandom(cardTypes)];
  replay.push(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
  deck[chosenSuite][chosenKey] !== 0
    ? (deck[chosenSuite][chosenKey] = 0)
    : dealCards(deck);
  hand.push({ description: `${chosenKey} of ${chosenSuite}` });
  return deck;
};

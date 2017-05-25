import React, { Component } from 'react';

class suite {
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

class Game extends Component {
  state = {
    spades: new suite('spades'),
    hearts: new suite('diamonds'),
    clubs: new suite('clubs'),
    diamonds: new suite('diamonds'),
  };

  pickAtRandom = array => Math.floor(Math.random() * array.length);

  handleClick = event => {
    const cardTypes = Object.keys(this.state.spades);
    const suiteTypes = Object.keys(this.state);
    const chosenSuite = suiteTypes[this.pickAtRandom(suiteTypes)];
    const chosenKey = cardTypes[this.pickAtRandom(cardTypes)];
    console.log(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
    this.setState({
      [chosenSuite]: {
        ...this.state[chosenSuite],
        [chosenKey]: 0,
      },
    });
    console.log('state', this.state);
  };

  render() {
    return (
      <div>
        stuff <button onClick={this.handleClick}> Change State </button>{' '}
      </div>
    );
  }
}

export default Game;

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
    value: '',
  };

  pickAtRandom = array => Math.floor(Math.random() * array.length);

  handleClick = event => {
    Array.from({ length: Number(this.state.value) }, () => this.dealCards());
    console.log('state', this.state);
  };

  dealCards = () => {
    const cardTypes = Object.keys(this.state.spades);
    const suiteTypes = Object.keys(this.state).slice(0, -1);
    const chosenSuite = suiteTypes[this.pickAtRandom(suiteTypes)];
    const chosenKey = cardTypes[this.pickAtRandom(cardTypes)];
    console.log(`The picked suite is ${chosenSuite} and the card type is ${chosenKey}`);
    this.state[chosenSuite][chosenKey] !== 0
      ? this.setState({
          [chosenSuite]: {
            ...this.state[chosenSuite],
            [chosenKey]: 0,
          },
        })
      : this.dealCards();
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Deal a Hand</button>
        <input
          type="text"
          placeholder="Number of hands"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>
          {Object.keys(this.state).slice(0, -1).map(key => (
            <div>
              <p>{key}</p>
              <pre>{JSON.stringify(this.state[key], undefined, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;

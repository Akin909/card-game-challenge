import React, { Component } from 'react';
import uuid from 'uuid';
import { Deck, dealCards, replay, hand } from './GameLogic';

class Game extends Component {
  state = {
    value: '',
    cards: Deck,
  };

  handleClick = event => {
    //This returns an array of objects which represents the deck at each
    //point in the shuffle
    const newDeck = Array.from({ length: Number(this.state.value) }, () =>
      dealCards(this.state.cards)
    );
    //Set state to the deck at the end of the shuffle
    this.setState({ cards: newDeck.slice(-1) });
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    console.log('hand', hand);
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
          {Object.keys(this.state.cards).map(key => (
            <div key={uuid()}>
              <p>{key}</p>
              <pre>{JSON.stringify(this.state.cards[key], undefined, 2)}</pre>
            </div>
          ))}
          <ul>
            {replay.map(step => <li key={uuid()}>{step}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Game;

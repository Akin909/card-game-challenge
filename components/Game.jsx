import React, { Component } from 'react';
import uuid from 'uuid';

import { Deck, dealCards, replay } from './GameLogic';
import { CardContainer, Intro, Replay } from './Styled.jsx';
import Card from './Card.jsx';

class Game extends Component {
  state = {
    value: '',
    cards: Deck,
    lastGame: {},
    players: 2,
    scores: [],
    hand: [],
  };

  calculateScore = hand => {
    const totalScore = hand.reduce((sum, card) => sum + card.value, 0);
    const firstScore = hand
      .slice(0, hand.length / this.state.players)
      .reduce((sum, card) => sum + card.value, 0);
    const nextScore = totalScore - firstScore;
    return {
      nextScore,
      firstScore,
      //totalScore,
    };
  };

  handleClick = event => {
    const noOfCards = this.state.value;
    const { players, cards, hand } = this.state;
    //This returns an array of objects which represents the deck at each point in the shuffle
    const newDeck = Array.from({ length: Number(noOfCards) * players }, () =>
      //TODO need to pass in hand rather than use a global object
      dealCards(cards, noOfCards, hand)
    );
    //Set state to the deck at the end of the shuffle
    const currentDeck = newDeck.slice(-1);
    this.setState({
      lastGame: currentDeck,
      scores: this.calculateScore(currentDeck[0].hand),
    });
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    const { scores, cards, value, hand } = this.state;
    const winner = Object.keys(scores).filter(
      (player, nextPlayer) =>
        scores[player] > scores[nextPlayer] ? player : nextPlayer
    );
    return (
      <div>
        <Intro>
          {winner.length > 0 && `${winner} Wins!, Score: ${scores[winner]}`}
          <input
            type="text"
            placeholder="Number of hands"
            value={value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Deal a Hand</button>
        </Intro>
        <CardContainer>
          {hand.map(card => (
            <Card key={uuid()} description={card.description} />
          ))}
        </CardContainer>
        <div>
          <Replay>
            {replay.map(step => <li key={uuid()}>{step}</li>)}
          </Replay>
        </div>
      </div>
    );
  }
}

export default Game;

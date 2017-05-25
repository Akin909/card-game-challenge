import React, { Component } from 'react';
import uuid from 'uuid';

import { Deck, dealCards, replay, hand } from './GameLogic';
import { CardContainer } from './Styled.jsx';
import Card from './Card.jsx';

class Game extends Component {
  state = {
    value: '',
    cards: Deck,
    lastGame: {},
    players: 2,
    scores: [],
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
    const { players, cards } = this.state;
    //This returns an array of objects which represents the deck at each point in the shuffle
    const newDeck = Array.from({ length: Number(noOfCards) * players }, () =>
      //TODO need to pass in hand rather than use a global object
      dealCards(cards, noOfCards)
    );
    //Set state to the deck at the end of the shuffle
    this.setState({
      lastGame: newDeck.slice(-1),
      scores: this.calculateScore(hand),
    });
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    const { scores, cards, value } = this.state;
    const winner = Object.keys(scores).filter(
      (player, nextPlayer) =>
        scores[player] > scores[nextPlayer] ? player : nextPlayer
    );
    return (
      <div>
        <div key={uuid()}>
          {winner.length > 0 && `${winner} Wins!`}
        </div>
        <button onClick={this.handleClick}>Deal a Hand</button>
        <input
          type="text"
          placeholder="Number of hands"
          value={value}
          onChange={this.handleChange}
        />
        <CardContainer>
          {hand.map(card => (
            <Card key={uuid()} description={card.description} />
          ))}
        </CardContainer>
        <div>
          <ul>
            {replay.map(step => <li key={uuid()}>{step}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Game;
//{Object.keys(cards).map(cardType => {
//return Object.values(cards[cardType]).map(
//eachCard => eachCard.value > 0 && <Card cardType={cardType} card={eachCard} />
//);
//})}

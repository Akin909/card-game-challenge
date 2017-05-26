import React, { Component } from 'react';
import uuid from 'uuid';

import {
  Deck,
  dealCards,
  replay,
  calculateScore,
  determineWinner,
} from './GameLogic';
import {
  GameStatus,
  Players,
  Score,
  CardContainer,
  Intro,
  Replay,
} from './Styled.jsx';
import Card from './Card.jsx';

class Game extends Component {
  state = {
    value: '',
    cards: Deck,
    lastGame: {},
    players: 2,
    scores: {},
    hand: [],
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
      scores: calculateScore(currentDeck[0].hand, this.state.players),
      hand: [],
    });
  };

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    const { scores, cards, value, hand } = this.state;
    return (
      <div>
        <Score>
          {scores.winner &&
            (scores.winner === 'Tie'
              ? scores.winner
              : `${scores.winner} Wins!`)}
        </Score>
        <Intro>
          <input
            type="text"
            placeholder="Number of hands"
            value={value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Deal a Hand</button>
        </Intro>
        <GameStatus>
          {scores.allScores &&
            scores.allScores.map((player, index) => (
              <CardContainer key={uuid()}>
                <h3>{'Player ' + (index + 1)}</h3>
                {player.map(card => (
                  <Card key={uuid()} description={card.description} />
                ))}
              </CardContainer>
            ))}
        </GameStatus>
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

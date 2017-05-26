import React, { Component } from 'react';
import uuid from 'uuid';

import * as l from './GameLogic';
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
    input: '',
    select: '',
    cards: l.Deck,
    lastGame: {},
    scores: {},
    hand: [],
  };

  handleClick = event => {
    const { select, cards, hand, input } = this.state;
    const noOfCards = Number(input);
    const players = Number(select);
    //This returns an array of objects which represents the deck at each point in the shuffle
    if (noOfCards >= 26) {
      return alert(
        'There are only 52 cards in a deck.. please enter a smaller number of cards to deal'
      );
    }
    const newDeck = Array.from({ length: noOfCards * (players || 2) }, () =>
      l.dealCards(cards, noOfCards, hand, players)
    );
    if (newDeck[0] instanceof Error) {
      return this.setState({
        error: newDeck[0].message,
      });
    }
    //Set state to the deck at the end of the shuffle
    const currentDeck = newDeck.slice(-1);
    this.setState({
      lastGame: currentDeck,
      scores: l.calculateScore(currentDeck[0].hand, players),
      hand: [],
    });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { scores, cards, value, hand, error } = this.state;
    return (
      <div>
        <Score>
          {scores.winner &&
            (scores.winner === 'Tie'
              ? scores.winner
              : `${scores.winner} Wins!`)}
        </Score>
        <Intro>
          {error && <div>{error}</div>}
          <input
            name="input"
            type="text"
            placeholder="Number of hands"
            value={value}
            onChange={this.handleChange}
          />
          <select
            id="players"
            name="select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            {Array.from({ length: 52 }, (option, index) => (
              <option value={index + 1} key={uuid()}>{index + 1}</option>
            ))}
          </select>
          <button onClick={this.handleClick}>Deal a Hand</button>
        </Intro>
        <GameStatus>
          {scores.allScores &&
            scores.allScores.map((player, index) => (
              <CardContainer key={uuid()}>
                <h3
                >{`${scores.eachScore[index].player}, Score: ${scores.eachScore[index].score}`}</h3>
                {player.map(card => (
                  <Card key={uuid()} description={card.description} />
                ))}
              </CardContainer>
            ))}
        </GameStatus>
        <div>
          <Replay>
            {l.replay.map(step => <li key={uuid()}>{step}</li>)}
          </Replay>
        </div>
      </div>
    );
  }
}

export default Game;

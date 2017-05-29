import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import {
  GameStatus,
  CardContainer,
  Transition,
  PlayerScore
} from './Styled.jsx';
import Card from './Card.jsx';

const GameResults = ({ scores }) => (
  <GameStatus>
    <Transition
      transitionName="card"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {scores.sorted &&
        scores.sorted.map((player, index) => (
          <CardContainer key={uuid()}>
            <PlayerScore>
              {`${scores.eachScore[index].player}, Score: ${scores.eachScore[index].score}`}
            </PlayerScore>
            {player.map(card => <Card key={uuid()} {...card} />)}
          </CardContainer>
        ))}
    </Transition>
  </GameStatus>
);

GameResults.propTypes = {
  scores: PropTypes.object
};

export default GameResults;

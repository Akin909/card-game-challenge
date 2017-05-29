import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Cards = styled.div`
  width: 5em;
  height: 7em;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  margin: 1em;
  text-align: center;
  border: none;
  background-color: white;
  padding: 0.2em;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;
const numbers = {
  ace: 'A',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  ten: '10',
  jack: 'J',
  king: 'K',
  queen: 'Q'
};

//<CardImg src={`./assets/cards/${cardImgId + '.png'}`} alt={description} />
const Card = ({ chosenKey, suite, description }) => {
  const cardImgId = numbers[chosenKey] + suite.charAt(0).toUpperCase();
  return (
    <Cards>
      <CardImg src={`./assets/cards/${cardImgId + '.png'}`} alt={description} />
    </Cards>
  );
};
Card.propTypes = {
  description: PropTypes.string,
  chosenKey: PropTypes.string,
  suite: PropTypes.string
};
export default Card;

import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

//Facilitated laziness with the help of stackoverflow
function importAll(image) {
  let images = {};
  image.keys().forEach((item, index) => {
    images[item.replace('./', '')] = image(item);
  });
  return images;
}
const images = importAll(
  require.context(
    './assets/card-svgs/cards-png-300px/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);
//background-image: url(${images[props => props.bg + '.png']})
const Cards = styled.div`
  width: 5em;
  height: 7em;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  margin: 1em;
  text-align: center;
  border: none;
  background-color: none;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  padding: 0.2em;
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
  queen: 'Q',
};

const Card = ({ chosenKey, suite, description }) => {
  const cardImgId = numbers[chosenKey] + suite.charAt(0).toUpperCase();
  console.log('chosenKey', chosenKey);
  console.log('cardImgId', cardImgId);
  return (
    <Cards bg={cardImgId}>
      <CardImg src={images[cardImgId + '.png']} alt={description} />
    </Cards>
  );
};
Card.propTypes = {
  description: PropTypes.string,
  chosenKey: PropTypes.string,
  suite: PropTypes.string,
};
export default Card;

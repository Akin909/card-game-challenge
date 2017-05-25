import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Cards = styled.div`
  width: 5em;
  height: 7em;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  margin: 1em;
  text-align: center;
  padding: 0.4rem;
`;

const Card = ({ description }) => (
  <Cards>
    {description}
  </Cards>
);

Card.propTypes = {
  description: PropTypes.string,
};

export default Card;

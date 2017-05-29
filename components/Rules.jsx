import React from 'react';
import styled from 'styled-components';

const RulesContainer = styled.ul`
  color: white;
`;
const Rules = props => (
  <RulesContainer>
    <h2>Rules</h2>
    <li>Each number card is worth one point.</li>
    <li>
      Each Face card has a special value.
      <ul>
        <li>King: 13</li>
        <li>Queen: 12</li>
        <li>Jack: 11</li>
      </ul>
    </li>
    <li>A Pair i.e. two cards with the same value are worth 10 extra points</li>
    <li>
      Three of a kind - 3 cards with the same value are worth 20 extra points
    </li>
    <li>
      A Straight - all cards with the same value are worth 40 extra points
    </li>
  </RulesContainer>
);

export default Rules;

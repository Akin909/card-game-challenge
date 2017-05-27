import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Game from 'Game';

describe('Game', () => {
  it('renders without crashing', () => {
    mount(<Game />);
  });

  describe('render', () => {
    it('should render the game', () => {
      const game = shallow(<Game />);
      const input = <div className="game-div" />;
      expect(game.contains(input)).toEqual(true);
    });
  });
});

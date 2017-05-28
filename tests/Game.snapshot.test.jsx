import React from 'react';
import renderer from 'react-test-renderer';
import Game from './../components/Game.jsx';

describe('Game component renders correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Game />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Game from './../components/Game.jsx';
import { Input } from './../components/Styled.jsx';

describe('Game', () => {
  let component, input;
  beforeEach(() => {
    component = shallow(<Game />);
    input = component.find('input');
    console.log('input', input);
  });

  it('input should have correct props', () => {
    expect(component.find(input).props().value.length).toEqual(0);
  });
});

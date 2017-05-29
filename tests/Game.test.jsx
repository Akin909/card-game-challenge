import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Game from './../src/components/Game.jsx';
import { Input } from './../src/components/Styled.jsx';

describe('Game', () => {
  let component, input;
  beforeEach(() => {
    component = shallow(<Game />);
    input = component.find('input');
  });
  //TODO also figure out how to test this
  it('input should have correct props', () => {
    //expect(component.find(input).props().value.length).toEqual(0);
  });
});

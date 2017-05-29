import React from 'react';
import { shallow } from 'enzyme';
import GameResults from './../src/components/GameResults.jsx';

describe('Game result tests', () => {
  let component;
  beforeEach(() => {
    const props = { scores: { test: 'test' } };
    component = shallow(<GameResults scores={props} />);
  });
  // TODO figure out how to actually test this
  it('Should have correct props', () => {
    //expect(component.props().scores.test).toBe('test');
  });
});

import React, { Component } from 'react';
import Game from './Game.jsx';
import { AppContainer } from './Styled.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        Pixie Labs Card Game
        <Game />
      </AppContainer>
    );
  }
}

export default App;

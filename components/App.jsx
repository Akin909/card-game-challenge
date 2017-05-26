import React, { Component } from 'react';
import Game from './Game.jsx';
import { AppContainer, Title } from './Styled.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        <Title>Pixie Labs Card Game</Title>
        <Game />
      </AppContainer>
    );
  }
}

export default App;

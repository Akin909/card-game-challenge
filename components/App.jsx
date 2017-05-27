import React, { Component } from 'react';
import Game from './Game.jsx';
import { AppContainer, Title } from './Styled.jsx';
import { injectGlobal } from 'styled-components';

//eslint-disable-next-line
injectGlobal`
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit
   }
`;

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

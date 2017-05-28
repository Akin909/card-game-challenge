import React, { Component } from 'react';
import Game from './Game.jsx';
import { AppContainer, Title } from './Styled.jsx';
import { injectGlobal } from 'styled-components';
import font from './font.js';

//eslint-disable-next-line
injectGlobal`
/* roboto-regular - latin */
${font}
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: inherit;
    font-family: inherit;
   }

   .card-enter {
    transform: translateX(-100%)
   }
   .card-enter.card-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
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

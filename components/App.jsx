import React, { Component } from 'react';
import Game from './Game.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World
        <Game />
      </div>
    );
  }
}

export default App;

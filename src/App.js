import React from 'react';
import Game from './Game.js';
import './App.css';
import './Game.css';
import './Board.css';
import './Square.css';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <div className="app-container">
          <Game />
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
import Game from './Game.js';
import './reset.css';
import './button.css'
import './app.css';
import './game.css';
import './board.css';
import './square.css';
import './player-score.css';

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

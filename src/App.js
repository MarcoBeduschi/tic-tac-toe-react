import React from 'react';
import Game from './Game.js';
import './reset.scss';
import './button.scss'
import './app.scss';
import './game.scss';
import './match.scss';
import './board.scss';
import './square.scss';
import './player-score.scss';
import './match-over-modal.scss';

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

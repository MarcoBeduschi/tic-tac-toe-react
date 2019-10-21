import React from 'react';
import Game from './Game';
import './reset.scss';
import './button.scss'
import './app.scss';
import './game.scss';
import './match.scss';
import './match-body.scss';
import './match-over.scss';
import './board.scss';
import './square.scss';
import './player-score.scss';

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
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

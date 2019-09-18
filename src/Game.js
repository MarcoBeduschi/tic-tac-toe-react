import React from 'react';
import Match from './Match.js'
import PlayerScore from './PlayerScore.js';
import { playerVictoryCount } from './logic/judge.js';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerHistory: []
        }
    }

    render() {
        return (
            <div className="game">
                <div className="game-header">
                    <div className="player-scores">
                        <PlayerScore
                            player={'X'}
                            score={playerVictoryCount('X', this.state.winnerHistory)}
                        />
                        <PlayerScore
                            player={'O'}
                            score={playerVictoryCount('O', this.state.winnerHistory)}
                        />
                    </div>
                    <p><b>{this.state.xIsNext ? 'X' : 'O'}</b> is next.</p>
                </div>
                <Match onMatchOver={this.onMatchOver}/>
            </div>
        );
    }

    onMatchOver = (winner) => {
        this.setState((prevState) => {
            const newWinnerHistory = [...prevState.winnerHistory, winner]

            return {
                winnerHistory: newWinnerHistory
            }
        })
    }
}

export default Game;

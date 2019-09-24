import React from 'react';
import Match from './Match.js'

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
                <Match winnerHistory={this.state.winnerHistory} onMatchOver={this.onMatchOver}/>
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

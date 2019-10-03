import React from 'react';
import MatchBody from './MatchBody.js';
import PlayerScore from './PlayerScore.js';
import MatchStatus from './MatchStatus.js';
import { calculateWinner, playerVictoryCount, currentPlayer } from './logic/judge.js';
import PropTypes from 'prop-types';

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState();
    }

    initialState() {
        return {
            turn: 1,
            xIsNext: true,
            matchOver: false,
            winner: null,
            squares: Array(9).fill(null)
        }
    }

    render() {
        return (
            <div>
                <div className="match-header">
                    <div className="player-scores">
                        <PlayerScore
                            player={'X'}
                            score={playerVictoryCount('X', this.props.winnerHistory)}
                            active={currentPlayer(this.state.xIsNext) === 'X'}
                        />
                        <PlayerScore
                            player={'O'}
                            score={playerVictoryCount('O', this.props.winnerHistory)}
                            active={currentPlayer(this.state.xIsNext) === 'O'}
                        />
                    </div>
                    <MatchStatus
                        xIsNext={this.state.xIsNext}
                        matchOver={this.state.matchOver}
                    />
                </div>
                <MatchBody
                    winner={this.state.winner}
                    gameOver={this.state.matchOver}
                    squares={this.state.squares}
                    onBoardUpdated={this.onBoardUpdated}
                />
                <div className="match-footer">
                    <button
                        className="btn btn-light"
                        type="button"
                        onClick={this.restartMatch}>
                        RESTART MATCH
                    </button>
                </div>
            </div>
        );
    }

    onBoardUpdated = (i) => {
        if (this.state.matchOver || this.state.squares[i]) {
            return;
        }

        this.setState((prevState) => {
            let newSquares = [...prevState.squares];
            newSquares[i] = this.state.xIsNext ? 'X' : 'O';
            const newWinner = calculateWinner(newSquares);
            const newMatchOver = newWinner ? true : false;

            return {
                squares: newSquares,
                turn: prevState.turn + 1,
                xIsNext: !prevState.xIsNext,
                matchOver: newMatchOver,
                winner: newWinner,
            };
        }, this.onTurnEnded);
    }

    onTurnEnded = () => {
        if (this.state.matchOver) {
            this.props.onMatchOver(this.state.winner);
        }
    }

    restartMatch = () => {
        this.setState(() => this.initialState())
    }
}

Match.propTypes = {
    winnerHistory: PropTypes.array.isRequired,
    onMatchOver: PropTypes.func.isRequired,
}

export default Match;

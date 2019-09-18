import React from 'react';
import Board from './Board.js';
import { calculateWinner } from './logic/judge.js';

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
                <Board
                    squares={this.state.squares}
                    updateBoard={this.updateBoard}
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

    updateBoard = (i) => {
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

export default Match;

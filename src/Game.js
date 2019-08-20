import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            turn: 1,
            board: Array(9).fill(null)
        };
    }

    handleSquareClick = (squareIndex) => {
        this.setState(function(state) {
            let newBoard = [...state.board];
            newBoard[squareIndex] = 'X';

            return {
                board: newBoard
            };
        });
    }
    
    render() {
        return (
            <div className="game">
                <div className="game-header">
                    <h1>Tic Tac Toe Game</h1>
                    <h3>Turn {this.state.turn}</h3>
                </div>
                <Board board={this.state.board} handleSquareClick = {this.handleSquareClick}/>
            </div>
        );
    }
}

export default Game;
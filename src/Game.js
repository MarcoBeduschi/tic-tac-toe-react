import React from 'react';
import Board from './Board.js';

function Game(props) {
    return (
        <div className="game">
            <div className="game-header">
                Tic Tac Toe Game
            </div>
            <Board />
        </div>
    );
}

export default Game;
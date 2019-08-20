import React from 'react';
import Square from './Square.js';

function Board(props) {
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

    function renderSquare(i) {
        return <Square id={i} value={props.board[i]} handleSquareClick={props.handleSquareClick}/>
    }
}

export default Board;
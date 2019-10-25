import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const Board = props => {
    const renderSquare = (i) => {
        return(
            <Square
                id={i}
                value={props.squares[i]}
                onClick={() => props.onBoardUpdated(i)}
            />
        )
    }

    return(
        <div className="board-container">
            <table>
                <tbody>
                    <tr>
                        <td>{renderSquare(0)}</td>
                        <td>{renderSquare(1)}</td>
                        <td>{renderSquare(2)}</td>
                    </tr>
                    <tr>
                        <td>{renderSquare(3)}</td>
                        <td>{renderSquare(4)}</td>
                        <td>{renderSquare(5)}</td>
                    </tr>
                    <tr>
                        <td>{renderSquare(6)}</td>
                        <td>{renderSquare(7)}</td>
                        <td>{renderSquare(8)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onBoardUpdated: PropTypes.func.isRequired
}

export default Board;

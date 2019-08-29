import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        turn: 1,
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    render() {
      const status = (this.state.xIsNext ? 'X' : 'O') + ' is next.'

      return(
        <div className="board">
          <div className="board-status">
            <p className="board-status-content">{status}</p>
          </div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
      )
    };

    renderSquare(i) {
      return <Square id={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    handleClick(squareIndex) {
      this.setState(function(state) {
        let newBoard = [...state.squares];
        newBoard[squareIndex] = state.xIsNext ? 'X' : 'O';

        return {
          squares: newBoard,
          xIsNext: !state.xIsNext,
        };
      });
    }
}

export default Board;

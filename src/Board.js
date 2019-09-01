import React from 'react';
import Square from './Square.js';
import { calculateWinner } from './logic/judge.js';

class Board extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        squares: Array(9).fill(null),
      };
    }

    render() {
      return(
        <div className="board">
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
    }

    renderSquare(i) {
      return <Square id={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    handleClick(i) {
      const winner = calculateWinner(this.state.squares);

      if (winner || this.state.squares[i]) {
        return;
      }

      this.setState(function(prevState) {
        let newBoard = [...prevState.squares];
        newBoard[i] = this.props.xIsNext ? 'X' : 'O';

        return {
          squares: newBoard,
        };
      }, this.props.nextTurn()
    );
    }
}

export default Board;

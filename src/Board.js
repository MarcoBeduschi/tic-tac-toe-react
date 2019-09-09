import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        squares: Array(9).fill(null),
      };
    }

    render() {
      return(
        <div className="board-container">
          <table>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </table>
        </div>
      )
    }

    renderSquare = (i) => {
      return <Square id={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    handleClick(i) {
      if (this.props.gameOver || this.state.squares[i]) {
        return;
      }

      this.setState((prevState) => {
        let newSquares = [...prevState.squares];
        newSquares[i] = this.props.xIsNext ? 'X' : 'O';

        return { squares: newSquares };
      }, () => {
        this.props.onSquaresUpdate(this.state.squares)
      });
    }
}

export default Board;

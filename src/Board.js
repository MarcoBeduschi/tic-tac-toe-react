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
    return <Square id={i} value={this.props.squares[i]} onClick={() => this.props.updateBoard(i)}/>
  }
}

export default Board;

import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: 1,
      xIsNext: true,
      gameOver: false,
      winner: null,
    };
  }

  render() {
    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner;
    } else {
      status = (this.state.xIsNext ? 'X' : 'O') + ' is next.'
    }

    return (
      <div className="game">
        <div className="game-header">
          <h1>Tic Tac Toe Game</h1>
          <h3>Turn {this.state.turn}</h3>
          <p>{status}</p>
        </div>
        <Board xIsNext={this.state.xIsNext} nextTurn={() => this.nextTurn()}/>
      </div>
    );
  }

  nextTurn() {
    // const winner = calculateWinner(squares);
    // const gameOver = winner ? true : false;

    this.setState((state) => {
      return {
        turn: state.turn + 1,
        xIsNext: !state.xIsNext,
      };
    });
  }
}

export default Game;

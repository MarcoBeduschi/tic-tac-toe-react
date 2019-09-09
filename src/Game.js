import React from 'react';
import Board from './Board.js';
import { calculateWinner } from './logic/judge.js';

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
    return (
      <div className="game">
        <div className="game-header">
          <h1>Turn {this.state.turn}</h1>
          <p><b>{this.state.xIsNext ? 'X' : 'O'}</b> is next.</p>
        </div>
        <Board
          xIsNext={this.state.xIsNext}
          onSquaresUpdate={this.onSquaresUpdate}
          gameOver={this.state.gameOver}
        />
      </div>
    );
  }

  onSquaresUpdate = (squares) => {
    const newWinner = calculateWinner(squares);
    const newGameOver = newWinner ? true : false;

    this.setState((prevState) => {
      return {
        turn: prevState.turn + 1,
        xIsNext: !prevState.xIsNext,
        gameOver: newGameOver,
        winner: newWinner,
      };
    });
  }
}

export default Game;

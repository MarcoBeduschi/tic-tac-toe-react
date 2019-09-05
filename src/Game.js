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
    return (
      <div className="game">
        <div className="game-header">
          <h1>Turn {this.state.turn}</h1>
          <p><b>{this.state.xIsNext ? 'X' : 'O'}</b> is next.</p>
        </div>
        <Board xIsNext={this.state.xIsNext} nextTurn={this.nextTurn}/>
      </div>
    );
  }

  nextTurn(squares) {
    // const winner = calculateWinner(squares);
    // const gameOver = winner ? true : false;

    // this.setState((state) => {
    //   return {
    //     turn: state.turn + 1,
    //     xIsNext: !state.xIsNext,
    //   };
    // });
  }
}

export default Game;

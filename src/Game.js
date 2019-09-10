import React from 'react';
import Board from './Board.js';
import PlayerScore from './PlayerScore.js';
import { calculateWinner } from './logic/judge.js';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState();
  }

  initialState() {
    return {
      turn: 1,
      xIsNext: true,
      gameOver: false,
      winner: null,
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-header">
          <div className="player-scores">
            <PlayerScore value={'X'}/>
            <PlayerScore value={'O'}/>
          </div>
          <p><b>{this.state.xIsNext ? 'X' : 'O'}</b> is next.</p>
        </div>
        <Board
          xIsNext={this.state.xIsNext}
          onSquaresUpdate={this.onSquaresUpdate}
          gameOver={this.state.gameOver}
        />
        <div className="game-footer">
          <button
            className="btn btn-light"
            type="button"
            onClick={this.restartGame}>
            RESTART GAME
          </button>
        </div>
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

  restartGame = () => {
    this.setState(() => this.initialState())
  }
}

export default Game;

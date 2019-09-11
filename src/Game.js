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
      squares: Array(9).fill(null),
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
          squares={this.state.squares}
          updateBoard={this.updateBoard}
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

  updateBoard = (i) => {
    if (this.state.gameOver || this.state.squares[i]) {
      return;
    }

    this.setState((prevState) => {
        let newSquares = [...prevState.squares];
        newSquares[i] = this.state.xIsNext ? 'X' : 'O';

        return {
          squares: newSquares,
          turn: prevState.turn + 1,
          xIsNext: !prevState.xIsNext,
        };
      }, () => { this.onTurnOver() });
  }

  onTurnOver = () => {
    const newWinner = calculateWinner(this.state.squares);
    const newGameOver = newWinner ? true : false;

    this.setState(() => {
      return {
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

import React, { useState, useEffect } from 'react';
import MatchBody from './MatchBody.js';
import PlayerScore from './PlayerScore.js';
import MatchStatus from './MatchStatus.js';
import { isBoardFull, calculateWinner, playerVictoryCount, currentPlayer } from './logic/judge';
import PropTypes from 'prop-types';

const Match = props => {
    const INITIAL_STATE = {
        turn: 0,
        xIsNext: false,
        matchOver: false,
        winner: null,
        squares: Array(9).fill(null)
    }

    const [, setTurn] = useState(INITIAL_STATE['turn']);
    const [xIsNext, setxIsNext] = useState(INITIAL_STATE['xIsNext']);
    const [matchOver, setMatchOver] = useState(INITIAL_STATE['matchOver']);
    const [winner, setWinner] = useState(INITIAL_STATE['winner']);
    const [squares, setSquares] = useState(INITIAL_STATE['squares']);

    useEffect(() => {
        const hasWinner = calculateWinner(squares) !== null

        setTurn((prevTurn) => prevTurn + 1); 
        setMatchOver(isBoardFull(squares) || hasWinner);
        setxIsNext(!xIsNext);
    }, [squares])

    useEffect(() => {
        const newWinner = calculateWinner(squares);
        setWinner(newWinner);
        
        if (newWinner) {
            props.onMatchOver(newWinner)
        } 
    }, [matchOver])

    const onBoardUpdated = (i) => {
        if (matchOver || squares[i]) { return }

        let newSquares = [...squares];
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
    }

    const restartMatch = () => {
        setTurn(INITIAL_STATE['turn']); 
        setxIsNext(INITIAL_STATE['xIsNext']); 
        setMatchOver(INITIAL_STATE['matchOver']); 
        setWinner(INITIAL_STATE['winner']); 
        setSquares(INITIAL_STATE['squares']); 
    }

    return (
        <div>
            <div className="match-header">
                <div className="player-scores">
                    <PlayerScore
                        player={'X'}
                        score={playerVictoryCount('X', props.winnerHistory)}
                        active={currentPlayer(xIsNext) === 'X'}
                    />
                    <PlayerScore
                        player={'O'}
                        score={playerVictoryCount('O', props.winnerHistory)}
                        active={currentPlayer(xIsNext) === 'O'}
                    />
                </div>
                <MatchStatus
                    xIsNext={xIsNext}
                    matchOver={matchOver}
                />
            </div>
            <MatchBody
                winner={winner}
                gameOver={matchOver}
                squares={squares}
                onBoardUpdated={onBoardUpdated}
            />
            <div className="match-footer">
                <button
                    className="btn btn-light"
                    type="button"
                    onClick={restartMatch}>
                        RESTART MATCH
                </button>
            </div>
        </div>
    );
}

Match.propTypes = {
    winnerHistory: PropTypes.array.isRequired,
    onMatchOver: PropTypes.func.isRequired,
}

export default Match;

import React, { useState } from 'react';
import Match from './Match.js'

const Game = () => {
    const [winnerHistory, setWinnerHistory] = useState([]);
    
    const onMatchOver = (winner) => {
        setWinnerHistory((prevWinnerHistory) => [...prevWinnerHistory, winner]);
    }

    return (
        <div className="game">
            <Match winnerHistory={winnerHistory} onMatchOver={onMatchOver}/>
        </div>
    );
}


export default Game;

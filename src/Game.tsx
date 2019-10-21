import React, { useState } from 'react';
import Match from './Match.js'
import { PLAYER } from './logic/judge';

interface GameProps {}

const Game: React.FC<GameProps> = () => {
    const [winnerHistory, setWinnerHistory] = useState<PLAYER[]>([]);
    
    const onMatchOver = (winner: PLAYER) => {
        setWinnerHistory((prevWinnerHistory) => [...prevWinnerHistory, winner]);
    }

    return (
        <div className="game">
            <Match winnerHistory={winnerHistory} onMatchOver={onMatchOver}/>
        </div>
    );
}


export default Game;

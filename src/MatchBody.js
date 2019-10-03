import React from 'react';
import Board from './Board.js';
import MatchOver from './MatchOver.js';

function MatchBody(props) {
    return(
        <div className="match-body-container">
            {
                props.gameOver ? 
                    <MatchOver
                        winner={props.winner}
                    /> :
                    <Board
                        squares={props.squares}
                        onBoardUpdated={props.onBoardUpdated}
                    />
            }
        </div>
    )
}

export default MatchBody;
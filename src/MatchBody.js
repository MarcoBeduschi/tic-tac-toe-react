import React from 'react';
import Board from './Board.js';
import MatchOver from './MatchOver.js';
import PropTypes from 'prop-types';

const MatchBody = props => {
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

MatchBody.propTypes = {
    gameOver: PropTypes.bool.isRequired,
    winner: PropTypes.string,
    squares: PropTypes.array.isRequired,
    onBoardUpdated: PropTypes.func.isRequired,
}

export default MatchBody;
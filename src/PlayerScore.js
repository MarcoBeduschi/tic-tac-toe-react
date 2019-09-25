import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'

function PlayerScore(props) {
    let icon
    const showActiveClassName = props.active ? 'player-score-card-active' : ''

    if (props.player === 'X') {
        icon = <FontAwesomeIcon icon={faTimes} />;
    } else if (props.player === 'O') {
        icon = <FontAwesomeIcon icon={faCircle} />;
    }

    return(
        <div className={`player-score-card ${showActiveClassName}`}>
            <div className="player-score-icon">{icon}</div>
            <div className="player-score-current-score">
                {props.score ? props.score : "-"}
            </div>
        </div>
    )
}

export default PlayerScore;

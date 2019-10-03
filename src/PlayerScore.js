import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const PlayerScore = props => {
    const showActiveClassName = props.active ? 'player-score-card-active' : ''
    let icon

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

PlayerScore.propTypes = {
    active: PropTypes.bool.isRequired,
    player: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}

export default PlayerScore;

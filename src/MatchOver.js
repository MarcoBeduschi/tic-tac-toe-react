import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'

function MatchOver(props) {
    let icon

    if (props.winner === 'X') {
        icon = <FontAwesomeIcon icon={faTimes} />;
    } else if (props.winner === 'O') {
        icon = <FontAwesomeIcon icon={faCircle} />;
    } else {
        icon = <Fragment>
            <FontAwesomeIcon icon={faTimes} /> 
            <FontAwesomeIcon icon={faCircle} /> 
        </Fragment>
    }

    return(
        <div className="match-over">
            <div className="match_winner-container">
                <div className="winner-container_icon">{icon}</div>
                <div className="message">WINNER!</div> 
            </div>
        </div> 
    )
}

export default MatchOver;

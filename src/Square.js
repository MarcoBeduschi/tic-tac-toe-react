import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'

const Square = props => {
    let icon

    if (props.value === 'X') {
        icon = <FontAwesomeIcon icon={faTimes} />;
    } else if (props.value === 'O') {
        icon = <FontAwesomeIcon icon={faCircle} />;
    }

    return(
        <div className="square" onClick={props.onClick}>
            <span className={`square-content square-content-${props.value}`}>{icon}</span>
        </div>
    )
}

export default Square;

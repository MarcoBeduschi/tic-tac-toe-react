import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
import { SQUARE, PLAYER } from './logic/judge';

interface SquareProps {
    value: SQUARE;
    onClick: MouseEventHandler; // this is the same as (e: MouseEvent) => void;
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => {
    let icon

    if (value === PLAYER.X) {
        icon = <FontAwesomeIcon icon={faTimes} />;
    } else if (value === PLAYER.O) {
        icon = <FontAwesomeIcon icon={faCircle} />;
    }

    return(
        <div className="square" onClick={onClick}>
            <span className={`square-content square-content-${value}`}>{icon}</span>
        </div>
    )
}

export default Square;

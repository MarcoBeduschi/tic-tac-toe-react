import React from 'react';

function Square(props) {
    return(
        <div className="square-wrapper">
            <div className="square" onClick={props.onClick}>
                <span className="square-content">{props.value}</span>
            </div>
        </div>
    )
}

export default Square;

import React from 'react';

function Square(props) {
    return(
        <div className="square-wrapper">
            <div className="square" onClick={ () => (props.handleSquareClick(props.id))}>
                <p className="square-content">{props.value}</p>
            </div>
        </div>
    )    
}

export default Square;
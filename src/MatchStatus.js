import React from 'react';

function MatchStatus(props) {
    let statusMessage

    if(props.matchOver) {
        statusMessage = 'Game Over!'        
    } else {
        statusMessage = `${props.xIsNext ? 'X' : 'O'} is next.`
    }

    return <p>{statusMessage}</p>
}

export default MatchStatus;
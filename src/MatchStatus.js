import React from 'react';
import PropTypes from 'prop-types';

const MatchStatus = props => {
    let statusMessage

    if(props.matchOver) {
        statusMessage = 'Game Over!'        
    } else {
        statusMessage = `${props.xIsNext ? 'X' : 'O'} is next.`
    }

    return <p>{statusMessage}</p>
}

MatchStatus.propTypes = {
    matchOver: PropTypes.bool.isRequired,
    xIsNext: PropTypes.bool.isRequired
}

export default MatchStatus;
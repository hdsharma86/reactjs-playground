import React from 'react';
import { maxHeaderSize } from 'http';

const CharComponent = (props) => {

    const Styles = {
        display: 'inline-block',
        border: '1px solid #999',
        padding: '10px',
        fontSize: '14px',
        marginRight: '5px'
    };

    let character = props.char;
    
    return (
        <p onClick={props.click} style={Styles}>{character}</p>
    );
}

export default CharComponent;
import React from 'react';

const UserInput = (props) => {

    const inputStyle = {
        border: '1px solid #333',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px'
    };

    return(
        <div>
            <p><input onChange={props.change} style={inputStyle} type="text" value={props.value} /></p>
        </div>        
    );
}

export default UserInput;
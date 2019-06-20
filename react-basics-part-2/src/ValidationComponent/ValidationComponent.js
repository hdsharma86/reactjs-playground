import React from 'react';

const ValidationComponent = (props) => {

    const styles = {
        color: 'red'
    };

    let minLength = 5;
    let maxLength = 50;

    let stringLength = props.length;
    const result = {message: ''};
    if(stringLength < minLength){ result.message = 'Minimum length should be '+minLength; }
    if(stringLength > maxLength){ result.message = 'Max length should be '+maxLength; }

    return (
        <div>
            <p style={styles}>{result.message}</p>
        </div>
    );
}

export default ValidationComponent;
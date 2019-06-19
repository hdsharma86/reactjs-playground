import React from 'react';

const UserOutput = (props) => {

    return (
        <div>
            <h3>Username: {props.username}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur erat at bibendum laoreet. Pellentesque sit amet enim a est commodo euismod. Donec eget arcu iaculis, bibendum lectus id, viverra enim. Etiam a mattis sem, ac interdum turpis. Integer feugiat consequat libero vel fringilla. Curabitur a tortor et justo auctor volutpat ut bibendum nulla. Sed laoreet felis a urna viverra malesuada.</p>
            <p>Duis lacinia in purus id egestas. Praesent sed felis dolor. Vestibulum nisi quam, pulvinar vitae erat at, sodales lobortis dolor. Nam arcu dui, rhoncus vitae augue sit amet, ultrices tristique arcu. Sed ac lacus placerat, ultricies ante vitae, viverra dui. Sed convallis bibendum mi, id faucibus nulla. Praesent ut interdum orci. Vivamus finibus interdum velit, sed gravida neque. Nam ut commodo lorem.</p>
        </div>
    );
}

export default UserOutput;
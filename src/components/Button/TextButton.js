import React from 'react';
import './TextButton.css';

const styles = {
    color : 'black',
    fontFamily: 'monospace',
    backgroundColor: 'blue'
};

function TextButton(props) {
    return ( 
        <div class="Button">
            <h1 style={styles}> ein text</h1>
            <p>{props.name}</p>
        </div>
    );
};
export default TextButton
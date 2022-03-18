import React from 'react';
import './StateButton.css';

function StateButton(props) {
    return ( 
        <div class="StateButton">
            <div class="StateButtonText">
                <p>{props.FunctionText}</p>
            </div>
            <div class="StateButtonText">
                <p>{props.FunctionState}</p>
            </div>
            <div class="StateButtonImage">
                <i class="fas fa-check-circle"></i>
            </div>
        </div>
    );
};
export default StateButton
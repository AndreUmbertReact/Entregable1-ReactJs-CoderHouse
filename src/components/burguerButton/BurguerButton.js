import React from 'react';
import "./BurguerButton.css";

const BurguerButton = (props) => {
    return (
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}>
            <span className={`span ${props.clicked ? "open" : ""}`}></span>
            <span className={`span ${props.clicked ? "open" : ""}`}></span>
            <span className={`span ${props.clicked ? "open" : ""}`}></span>
        </div>
    )
}

export default BurguerButton;

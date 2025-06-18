import React from "react";
import { useState } from "react";
import usa from '../assets/flags/usa.png'

export const Card = (props) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className={`card ${props.difficulty} ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
            <div className="back">
                <h1>{ props.name }</h1>
            </div>
            <div className="front">
                <div className="question">
                    <h3>Which country is this?</h3>
                </div>
                <div className="flag">
                    <img src={ props.flag }/>
                </div>
            </div>
        </div>
    );
}
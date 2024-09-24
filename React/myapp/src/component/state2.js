import React from 'react'
import { useState } from 'react';

export default function State2() {
    const [colour, setColour] = useState('Blue');
    const [ca, setCa] = useState('1');
    
    const handleClick = () => {
        setColour('red');
        setCa('2');
    }

    return (
        <div>
            <h1 style={{background: colour}}>I've completed my CA {ca}</h1>
            <button onClick={handleClick}>Start Now</button>
        </div>
    )
}

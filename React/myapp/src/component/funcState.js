import React from 'react';
import { useState } from 'react';

export default function State() {
    const [colour, setcolour] = useState('Blue');

  return (
    <div>
        <h1 style={{color: colour}}>My favourite colour is {colour}</h1>
        <button onClick={()=>{setcolour('red')}}>Change Colour</button>
    </div>
  )
}

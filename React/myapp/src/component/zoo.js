import React from 'react';
import Bird from './bird';

export default function zoo() {
    const bird = {name : "Woodpecker", colour : "Brown"};

  return (
    <div>
        <h2>
            Zoo!
        </h2>
        <Bird bird = {bird}/>
  
        
    </div>
    
  )
}

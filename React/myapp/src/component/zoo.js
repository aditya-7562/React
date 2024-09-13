import React from 'react';
import Bird from './bird';
import Animal from './animal';

export default function zoo() {
    const bird = {name : "Woodpecker", colour : "Brown"};
    const animal1 = {species : "Woodpecker", complextion : "Brown"};

  return (
    <div>
        <h2>
            Zoo!
        </h2>
        <Bird bird = {bird}/>
        <Animal animal1 = {animal1}/>
  
        
    </div>
    
  )
}

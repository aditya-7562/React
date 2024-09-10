import React from 'react'
import Apple from './apple';


const isDoorOpen = true;
export default function Fruit() {
    // const fruitshop = {name: "apple", colour: "red"};

  return (
    <div>
        {/* <h2>Fruits</h2> */}
        {/* Conditional Render */}

        {/* {fruitshop.name !== undefined && fruitshop.colour !== undefined ? < Apple fruitshop = {fruitshop}/> : null} */}
        {/* <Apple fruitshop = {fruitshop} /> */}

        {isDoorOpen ? <h2>Door is Open</h2> : <h2>Door is Closed</h2>}
    </div>
  )
}

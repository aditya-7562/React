import React, { useEffect, useRef, useState } from 'react'

export default function State4() {

    const input = useRef();
    const onClick = ()=>{
        console.log(input.current);
        input.current.style.background = "teal";
    }
  return (
    <div>
        <h1>Using UseRef</h1>
        <input type="text" ref={input} />
        <button onClick={onClick}>Click</button>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'

export default function State4() {

    const input = useRef();
    const [value, setValue] = useState('');
    const onClick = ()=>{
        setValue(input.current.value);
    }
  return (
    <div>
        <h1>Using UseRef</h1>
        <input type="text" ref={input} />
        <button onClick={onClick}>Add</button>
        <p>{value}</p>
    </div>
  )
}

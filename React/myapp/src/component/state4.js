import React, { useEffect, useRef, useState } from 'react'

export default function State4() {
    const [value, setValue] = useState(0);
    const count = useRef(0);
    console.log(count);

    useEffect(() => {
        count.current += 1;
    })
  return (
    <div>
        <button onClick={() => {setValue(prev => prev + 1)}}>Increament</button>
        <h1>{value}</h1>
        <button onClick={() => {setValue(prev => prev - 1)}}>Decreament</button>
        <h1>Render count is {count.current}</h1>


    </div>
  )
}

import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function State4() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubenum(num){
        console.log('done');
        return Math.pow(num, 3);
    }
    const result = useMemo(() => cubenum(Number(number)),[number]);
    // const result = cubenum(number);

  return (
    <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <h1>Cube of the Number: {result}</h1>
        <button onClick={() => {setCounter(counter + 1)}}>Counter++</button>
        <h1>Counter: {counter}</h1>
    </div>
  )
}

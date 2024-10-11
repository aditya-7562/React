import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function State4() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [counter, setCounter] = useState(0);

    function sum(num1, num2){
        return (num1+num2);
    }
    const result = useMemo(() => sum(Number(number1), Number(number2)));

  return (
    <div>
        <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <h1>Sum of the Numbers: {result}</h1>
        <button onClick={() => {setCounter(counter + 1)}}>Counter++</button>
        <h1>Counter: {counter}</h1>
    </div>
  )
}

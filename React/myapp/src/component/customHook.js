import React, { useState } from 'react'

function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue);

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)
    const reset = () => setCount(initialValue)

    return {count, increase, decrease, reset};
}
export default function CustomHook() {
    const {count, increase, decrease, reset} = useCounter(0);
  return (
    <div>
        <h1>Counter App using Coustom Hook</h1>
        <p>Current count: {count}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

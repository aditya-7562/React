import React, { useReducer } from 'react'

const counterReducer = (state, action) => {
    switch (action.type){
        case "increase":
            return {count: state.count + 1};
        case "decrease":
            return {count: state.count - 1};
        case "square":
            return {count: state.count * state.count};
        case "squareRoot":
            return {count: Math.sqrt(state.count)};
        default:
            return state;
    }
};


export default function Reducer() {
    const initialState = {count: 0};
    const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
        <h1>Counter App</h1>
        <p>Current Count: {state.count}</p>
        <button onClick={()=>dispatch({type: "increase"})}>Increase</button>
        <button onClick={()=>dispatch({type: "decrease"})}>Decrease</button>
        <button onClick={()=>dispatch({type: "square"})}>Square</button>
        <button onClick={()=>dispatch({type: "squareRoot"})}>Square Root</button>
    </div>
  )
}

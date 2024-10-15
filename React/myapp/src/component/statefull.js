import React, { useState } from 'react'

const StatefulComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>StateFul Component</h1>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default StatefulComponent;
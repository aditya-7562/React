import React, { useEffect, useState } from 'react';

export default function Activity5() {

    const [count, setCount] = useState(1);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        console.log('Screen Rendered');
    }, [count]);

    function increaseCount() {
        setCount((previousState) => previousState + 1);
    }
    function decreaseCount() {
        setCount((previousState) => previousState - 1);
    }

    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    const themeStyles = {
        backgroundColor: isDarkTheme ? 'black' : 'white',
        color: isDarkTheme ? 'white' : 'black',
        textAlign: 'center',
        height: '100vh',
    };

    return (
        <div style={themeStyles}>

            <h1>Counter: {count}</h1>

            <button onClick={increaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
            <br />

            <button onClick={toggleTheme}>
                Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
            </button>
            
        </div>
    );
}

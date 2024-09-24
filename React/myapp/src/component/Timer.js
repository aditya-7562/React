import React, { useEffect, useState } from 'react'

export default function Timer() {


    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log('Screen Rendered');
    }, [count])



    function updateCOunt() {
        setCount((previousState) => { return previousState + 1 });
    }

    return (
        <div>
            <h1>I have renderes the page {count} times!</h1>
            <button onClick={updateCOunt}>Update</button>
        </div>
    )
}

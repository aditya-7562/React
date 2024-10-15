import React, { useState, useEffect } from 'react';

const RenderLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Screen rendered');
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default RenderLogger;

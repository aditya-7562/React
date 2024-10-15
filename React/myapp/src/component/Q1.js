import React, { useState } from 'react';

const ToggleList = () => {

  const [Visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggle}>
        {Visible ? 'Hide List' : 'Show List'}
      </button>

      {Visible && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleList;

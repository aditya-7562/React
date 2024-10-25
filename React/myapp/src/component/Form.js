import React, { useState } from 'react'

export default function Form() {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData({
            ...FormData,
            [name] : value
        });
    }

  return (
    <div>
        <h2>Form validation in React</h2>
        <label>Name: </label>
        <input type="text" />
    </div>
  )
}

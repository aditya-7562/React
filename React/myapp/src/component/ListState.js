import React, { useState } from 'react'


export default function ListState() {
    const [list, setList] = useState([])
    const [count, setcount] = useState(1)

    function addCourse(){
        const courseName = 'Course' + count;
        setList((previousState) => [...previousState, courseName]);
        setcount((previousState) => previousState + 1);
    }
  return (
    <div>
        <h1>List</h1>
        <button onClick={addCourse}>AddCourse</button>
        <ul>
            {list.map(el => <li key = {el}>{el}</li>)}
        </ul>
    </div>
  )
}

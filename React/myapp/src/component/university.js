import React from "react";

export default function university(prop){

    const course1 = "React";
    const course2 = "Php";
    const {teacher1, teacher2} = prop
    
    return (
        <div>
            <h1>{course1} is taught by {teacher1}</h1>
            <h1>{course2} is taught by {teacher2}</h1>
        </div>
    )
}

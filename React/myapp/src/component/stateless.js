import React from "react";

const StatelesComponent = (prop) => {
    return(
        <div>
            <h1>Stateless Component</h1>
            <p>{props.message}</p>
        </div>
    )
}

export default StatelesComponent;
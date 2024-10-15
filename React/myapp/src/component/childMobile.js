import React, { useContext } from 'react'
import { MobileContext } from './mobile'

const ChildComponent = () => {
    const {mobile} = useContext(MobileContext);

    return (
        <div>
            <h1>Child COmponent</h1>
            <p>Mobile number form parent: {mobile}</p>
        </div>
    )
}

export default ChildComponent;

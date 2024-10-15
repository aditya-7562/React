import React, { useContext } from 'react'
import { MobileContext } from './mobile'
import ChildComponent from './childMobile';

const ParentComponent = () => {
    const {setMobile} = useContext(MobileContext);

    const handleInputChange = (e) =>{
        setMobile(e.target.value);
    };

return (
    <div>
        <h2>Parent Component</h2>
        <input type="text" placeholder="Enter Mobile Number" onChange={handleInputChange} />
        <ChildComponent/>
    </div>
)
}

export default ParentComponent;
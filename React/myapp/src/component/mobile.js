import React, { createContext, useState } from 'react'

export const MobileContext = createContext();

const MobileProvider = ({ children }) => {
    const [mobile, setMobile] = useState("");
    return (
        <MobileContext.Provider value={{ mobile, setMobile }}>
            {children};
        </MobileContext.Provider>

    )
}

export default MobileProvider;
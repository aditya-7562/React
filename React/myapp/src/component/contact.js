import React, { useContext } from 'react'
import { AppContext } from './appcontext'

export default function context() {
    const phone = useContext(AppContext);
  return(
    <div>Contact
      <h3>Phone: {phone}</h3>
    </div>
  )
}

import React from 'react'

export default function animal() {
  const {animal1} = this.props;
  const {name, colour} = animal1;
  return (
    <div>
        <h2>Animal</h2>
        <p>Its a {name} in {colour} colour!</p>
    </div>
  )
}

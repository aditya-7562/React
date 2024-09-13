import React from 'react'

export default function animal(props) {
  const {animal1} = props;
  const {species, complextion} = animal1;
  return (
    <div>
        <h2>Animal</h2>
        <p>Its a {species} in {complextion} colour!</p>
    </div>
  )
}

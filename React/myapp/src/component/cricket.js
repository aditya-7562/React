import React from 'react'

export default function cricket(props) {
    const {cric} = props;
  return (
    <div>
        {cric.map(({ cPlayer, country }, index) => (
          <p key={index}>
            {cPlayer} is playing cricket for the {country} club this year!
          </p>
        ))}
      </div>
  )
}

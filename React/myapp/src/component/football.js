
import React, { Component } from 'react';


export default class Football extends Component {
  render() {
    const { foot } = this.props;
    return (
      <div>
        {foot.map(({ fPlayer, country }, index) => (
          <p key={index}>
            {fPlayer} is playing football for the {country} club this year!
          </p>
        ))}
      </div>
    );
  }
}

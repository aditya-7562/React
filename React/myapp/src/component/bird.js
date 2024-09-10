import React, { Component } from 'react'

export default class bird extends Component {
  render() {
    const {bird} = this.props;
    const {name, colour} = bird;
    return (
      <div>
        <h2>Bird</h2>
        <p>It's a {name} and it's {colour} in colour!</p>
      </div>
    )
  }
}

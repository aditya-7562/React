import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super();
        this.state = {color: "blue"};
    }
  render() {
    return (
      <div>
        <h1 style = {{color: this.state.color}}>My car color is {this.state.color}</h1>
        <button onClick={() => {this.setState({color: "red"})}}>Change color</button>
      </div>
    )
  }
}

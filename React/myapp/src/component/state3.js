import React, { Component } from 'react';

class State3 extends Component {
  constructor() {
    super();
    this.state = {
      colour: 'Blue',
      ca: '1'
    };
  }

  handleClick = () => {
    this.setState({
      colour: 'red',
      ca: '2'
    });
  }

  render() {
    return (
      <div>
        <h1 style={{background: this.state.colour}}>I've completed my CA ${this.state.ca}</h1>
        <button onClick={this.handleClick}>Start Now</button>
      </div>
    );
  }
}

export default State3;

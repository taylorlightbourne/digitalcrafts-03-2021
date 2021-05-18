import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    // the point of using the constructor in react is to initialize your state
    this.state = {
      // state is a container than hold data, and let us have access to it
      count: 0,
    };
    // this refers to the entire class
    // this allows you to have access to individual elements, things, stuff on this class
    // this is unique to a class in JS
    // this is even more unique in that it refers to that specific class
  }

  // setState, allows you to access the state object
  render() {
    console.log(this);
    return (
      <div>
        <h1>How Much Does it Weigh?</h1>
        <h1> {this.state.count} lbs</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          Subtract
        </button>
      </div>
    );
  }
}
import React, { Component } from "react";

export default class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1> I am feeling {this.state.value}.</h1>
        <button
          onClick={() =>
            this.setState({
              value: "good",
            })
          }
        >
        Good
        </button>
        <button
          onClick={() =>
            this.setState({
              value: "bad",
            })
          }
        >
        Bad
        </button>
      </div>
    );
  }
}
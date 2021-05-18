import React, { Component } from "react";

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>What Would You Rate this App?</h1>
        <p>{this.state.count}</p>
        <input type="range"
            min={0} max={5}
            count={this.state.count}
            onChange={() =>
                this.setState({
                  count: this.state.count + 1,
                })
              }
        />
        </div>
      );
    }
}
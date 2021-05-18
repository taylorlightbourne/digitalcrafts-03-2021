import React, { Component } from "react";
import "../App.css";
import Logo from "./Logo";
import Input from "./Input";
import Buttons from "./Buttons";

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Logo />
        <Input />
        <Buttons />
      </div>
    );
  }
}

export default MainContainer;
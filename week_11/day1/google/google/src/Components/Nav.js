import React, { Component } from "react";
import "../App.css";
import LinksLeft from "./LinksLeft";
import LinksRight from "./LinksRight";



class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <LinksLeft />
        <LinksRight />
      </div>
    );
  }
}

export default Nav;
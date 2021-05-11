import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <h1>Taylor's Portfolio</h1>
                <div class="links">
                    <a href="https://github.com/taylorlightbourne">Projects</a>
                    <a href="https://linkedin.com/in/taylor-lightbourne-3a13aa20a">Resume</a>
                    <a>Contact</a>
                </div>
            </div>
        );
    }
}

export default Nav;


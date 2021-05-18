import React, { Component } from "react";
import "../App.css";
import ProfilePic from "./ProfilePic";

class LinksRight extends Component {
    render() {
        return (
        <div className="LinksRight">
            <a href="google.com">Gmail</a>
            <a href="google.com">Images</a>
            <a href="google.com"> 
            <ProfilePic />
            </a>
        </div>
        );
    }
}

export default LinksRight;


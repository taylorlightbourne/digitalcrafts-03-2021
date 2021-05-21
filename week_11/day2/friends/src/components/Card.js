import React, { Component } from 'react';
import "./cardContainer.css"

class Card extends Component {

    render() {
        const {name,age,location,} = this.props.friend
        return (
            <div className="friend-card">
                <h1>{name}</h1>
                <h3>{age}</h3>
                <h3>{location}</h3>         
            </div>
        );
    }
}

export default Card;
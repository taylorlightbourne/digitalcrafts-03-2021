import React, { Component } from "react";
import Card from "./Card";
import "./cardContainer.css";

class CardContainer extends Component {
  state = {
    searchCriteria: "",
    friendList: [],
    friendName: "",
    age: "",
    location: "",
  };

 componentDidMount() {
    this.setState({
     friendList: this.props.friendData[0].friend,
    });
  }

  searchCriteria = (event) => {
    const search = event.target.value;
    this.setState({
      searchCriteria: search,
    });
  };

  sendFriendToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  onSubmit = (event, filteredData) => {
    event.preventDefault();
    const newFriend = {
      name: this.state.friendName,
      age: this.state.age,
      location: this.state.location,
    };
    
    const newFriendList = [newFriend,...this.state.friendList]
    this.setState({
      friendList: newFriendList,
    });
  };

  render() {
    const {friendList} = this.state
    const filteredData = friendList.filter((friend) =>
      friend.name.includes(this.state.searchCriteria)
    )
      ? friendList.filter((friend) =>
          friend.name.includes(this.state.searchCriteria)
        )
      : friendList

    return (
      <div className="main-card-container">
        <div>
          <input
            name="friendName"
            className="search-field"
            onChange={(e) => this.searchCriteria(e)}
            type="text"
            placeholder="Search for a friend"
          />
        </div>
        <div>
          
          <form onSubmit={(e) => this.onSubmit(e, filteredData)}>
            <input
              name="friendName"
              className="create-field"
              type="text"
              placeholder="Enter a Name"
              value={this.state.friendName}
              onChange={(e) => this.sendFriendToData(e)}
            />
            <input
              name="age"
              className="create-field"
              type="text"
              placeholder="Enter Your Age"
              value={this.state.age}
              onChange={(e) => this.sendFriendToData(e)}
            />
            <input
              name="location"
              className="create-field"
              type="text"
              placeholder="Enter Your City, State"
              value={this.state.location}
              onChange={(e) => this.sendFriendToData(e)}
            />
            <input className="create-field" type="submit" value="Submit" />
          </form>
        </div>
        <div className="card-container">
          {filteredData.map((singleFriend, index) => (
            <Card key={singleFriend.name} friend={singleFriend} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
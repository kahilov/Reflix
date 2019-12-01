import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Jo", color: "red" },
        { name: "Jake", color: "blue" },
        { name: "Jill", color: "pink" },
        { name: "Jason", color: "green" }
      ]
    };
  }

  render() {
    let users = this.state.users  
    return <div className="users">{users.map(u => <div className="user" style={{background : u.color}}>{u.name}</div> )}</div>;
  }
}

export default Landing;

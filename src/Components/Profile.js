import React, { Component } from "react";
import image from "./amira.png";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Amira jhinaoui",
      bio: "Développeur full stack certifié ",
      imgSrc: { image },
      profession: "Développeur web",
      timer:0
    };
  }
  componentDidMount(){
 setInterval(() => {this.setState({timer:this.state.timer+1})
   
 }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.fullName} </h1>
        <p>{this.state.bio} </p>
        <img
          variant="top"
          src={image}
          style={{ width: "150px", margin: "auto" }}
        />
        <p>{this.state.profession} </p>
        <p>{this.state.timer} </p>
      </div>
    );
  }
}

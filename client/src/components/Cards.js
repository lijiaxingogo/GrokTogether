import React, { Component } from "react";
import Card from "./Card";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json });
      });
  }
  render() {
    const cardsComponents = [];
    for (let i = 0; i < this.state.data.length; i++) {
      cardsComponents.push(
        <Card
          key={`card${i}`}
          name={this.state.data[i].name}
          time={this.state.data[i].time}
          zoom={this.state.data[i].zoom}
          purpose={this.state.data[i].purpose}
        />
      );
    }
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        {cardsComponents}
      </div>
    );
  }
}

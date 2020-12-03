import { Component } from "react";
export default class Cards extends Component {
  render() {
    const myStyle = {
      width: "18rem",
    };
    return (
      <div className="card" style={myStyle}>
        <ul className="list-group">
          <li className="list-group-item">Name: {this.props.name}</li>
          <li className="list-group-item">Time: {this.props.time}</li>
          <li className="list-group-item">Zoom: {this.props.zoom}</li>
          <li className="list-group-item">Purpose: {this.props.purpose}</li>
        </ul>
      </div>
    );
  }
}

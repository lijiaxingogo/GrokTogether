import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Select from "react-select";
import axios from "axios";
// TODO: refactor the code using useState
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeZoom = this.onChangeZoom.bind(this);
    this.onChangePurpose = this.onChangePurpose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      time: new Date(),
      zoom: "",
      purpose: "",
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeTime(e) {
    //console.log('this is after split',e.spl)
    this.setState({
      time: e,
    });
  }
  onChangeZoom(e) {
    this.setState({
      zoom: e.target.value,
    });
  }
  onChangePurpose(e) {
    console.log("e", e);
    console.log("state purpose", this.state.purpose);

    this.setState({
      purpose: e,
    });
    console.log("state purpose", this.state.purpose);
  }
  onSubmit(e) {
    e.preventDefault();
    const form = {
      name: this.state.name,
      time: this.state.time,
      zoom: this.state.zoom,
      purpose: this.state.purpose.value,
    };
    console.log(form);
    // send the form to the database
    axios
      .post("http://localhost:5000/user/create", form)
      .then((res) => console.log(res.data));
    window.location = "/";
  }
  render() {
    const options = [
      { value: "pair-programming", label: "Pair Programming Algo" },
      { value: "interview-prep", label: "Interview Prep" },
      { value: "chat", label: "Chat" },
    ];
    return (
      <div>
        <h3>Create Card</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Time:</label>
            <br />
            <DateTimePicker
              onChange={this.onChangeTime}
              value={this.state.time}
              format="y-MM-dd h:mm a"
            />
          </div>
          <div className="form-group">
            <label>Zoom:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.zoom}
              onChange={this.onChangeZoom}
            />
          </div>
          <div className="form-group">
            <label>Purpose:</label>
            <Select
              options={options}
              value={this.state.purpose}
              onChange={this.onChangePurpose}
              defaultValue={options[0]}
              isSearchable={true}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
}

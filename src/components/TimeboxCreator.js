import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class TimeboxCreator extends Component {
  state = {
    title: "",
    totalTimeInMinutes: ""
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  add = () => {
    const { onCreate } = this.props;
    const { title, totalTimeInMinutes } = this.state;
    if (title.length < 3 || totalTimeInMinutes <= 0) return;
    onCreate({
      id: uuidv4(),
      title,
      totalTimeInMinutes
    });
    this.setState({
      title: "",
      totalTimeInMinutes: ""
    });
  };
  render() {
    const { title, totalTimeInMinutes } = this.state;

    return (
      <div className="TimeboxCreator">
        <label>
          Co robisz?
          <input
            value={title}
            type="text"
            onChange={this.handleInputChange}
            name="title"
          />
        </label>
        <br />
        <label>
          Ile minut?
          <input
            value={totalTimeInMinutes}
            type="number"
            onChange={this.handleInputChange}
            name="totalTimeInMinutes"
          />
        </label>
        <br />
        <button className="add" onClick={this.add}>dodaj timebox</button>
      </div>
    );
  }
}

export default TimeboxCreator;

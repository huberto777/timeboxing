import React, { Component } from "react";

class EditTimebox extends Component {
  state = {
    title: this.props.timebox.title,
    totalTimeInMinutes: this.props.timebox.totalTimeInMinutes,
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  update = () => {
    const { timebox, onUpdate } = this.props;
    const { title, totalTimeInMinutes } = this.state;
    if (title.length < 3 || totalTimeInMinutes <= 0)
      return alert("complete all fields");
    onUpdate({ ...timebox, title, totalTimeInMinutes });
  };
  render() {
    const { title, totalTimeInMinutes } = this.state;
    const { cancelEdit } = this.props;
    return (
      <div className="TimeboxEditor">
        <label>title:</label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={this.handleInput}
        />
        <br />
        <label>time:</label>
        <input
          type="number"
          value={totalTimeInMinutes}
          name="totalTimeInMinutes"
          onChange={this.handleInput}
        />
        <br />
        <button className="update" type="submit" onClick={this.update}>
          update
        </button>
        <button className="cancel" onClick={cancelEdit}>
          cancel
        </button>
      </div>
    );
  }
}

export default EditTimebox;

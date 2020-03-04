import React, { Component } from "react";
import Timebox from "./Timebox";
import EditTimebox from "./EditTimebox";
import TimeboxCreator from "./TimeboxCreator";

class TimeboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      timeboxes: [
        {
          id: "a",
          title: "uczę sie reacta",
          totalTimeInMinutes: 10
        },
        {
          id: "b",
          title: "uczę sie laravela",
          totalTimeInMinutes: 23
        },
        {
          id: "c",
          title: "uczę sie js es6",
          totalTimeInMinutes: 22
        }
      ]
    };
  }

  handleCreate = createdTimebox => {
    this.setState(prevState => ({
      timeboxes: [createdTimebox, ...prevState.timeboxes] // dodajemy element na początku tablicy
    }));
  };

  handleDelete = id => {
    const index = this.state.timeboxes.findIndex(timebox => timebox.id === id);
    this.state.timeboxes.splice(index, 1);
    this.setState(prevState => ({
      timeboxes: prevState.timeboxes
    }));
  };

  handleEditTimebox = (id, title, totalTimeInMinutes, isEditable) => {
    this.setState({
      id,
      title,
      totalTimeInMinutes,
      isEditable: true
    });
  };

  cancelEdit = () => {
    this.setState({
      isEditable: false
    });
  };

  handleUpdateTimebox = (id, updatedTimebox) => {
    this.setState({
      timeboxes: this.state.timeboxes.map(timebox =>
        timebox.id === id ? updatedTimebox : timebox
      ),
      isEditable: false
    });
  };

  render() {
    const { isEditable, id, title, totalTimeInMinutes } = this.state;
    return (
      <>
        {isEditable ? (
          <EditTimebox
            id={id}
            title={title}
            totalTimeInMinutes={totalTimeInMinutes}
            onUpdate={this.handleUpdateTimebox}
            cancelEdit={this.cancelEdit}
          />
        ) : (
          <>
            <TimeboxCreator onCreate={this.handleCreate} />
            {this.state.timeboxes.map(({ id, title, totalTimeInMinutes }) => (
              <Timebox
                key={id}
                title={title}
                isEditable={isEditable}
                totalTimeInMinutes={totalTimeInMinutes}
                onDelete={() => this.handleDelete(id)}
                onEdit={() =>
                  this.handleEditTimebox(id, title, totalTimeInMinutes)
                }
              />
            ))}
          </>
        )}
      </>
    );
  }
}

export default TimeboxList;

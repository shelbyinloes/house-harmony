// IN ADVANCED-EXPRESS-PRACTICE THIS WAS USED FOR THE "VIEW" BUTTON



import React, { Component } from "react";

class Chore extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadChore(id);
  }

  render() {
    return (
      <div>
        <h2>Am I here?</h2>
        <h3>{this.props.chore.task}</h3>
        <h3>{this.props.chore.time}</h3>
        <h3>{this.props.chore.progress}</h3>
      </div>
    );
  }
}

export default Chore;

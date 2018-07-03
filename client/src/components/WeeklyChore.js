import React, { Component } from "react";

class WeeklyChore extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.loadWeeklyChore(id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.weeklyChore.chore}</h3>
      </div>
    );
  }
}

export default WeeklyChore;

import React, { Component } from "react";

class DailyChore extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadDailyChore(id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.dailyChore.chore}</h3>
      </div>
    );
  }
}

export default DailyChore;

//  naming this correct?

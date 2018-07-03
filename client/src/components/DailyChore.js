// IN ADVANCED-EXPRESS-PRACTICE THIS WAS USED FOR THE "VIEW" BUTTON



import React, { Component } from "react";

class DailyChore extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadDailyChore(id);
  }

  render() {
    return (
      <div>
        <h2>Am I here?</h2>
        <h3>{this.props.dailyChore.chore}</h3>
      </div>
    );
  }
}

export default DailyChore;

//  naming this correct?

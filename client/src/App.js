import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header";
import DailyChores from "./containers/DailyChoresContainer";
import WeeklyChores from "./containers/WeeklyChoresContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyChores: [],
      weeklyChores: []
    };
  }
  componentDidMount() {
    this.props.getDailyChores();
    this.props.getWeeklyChores();
  }
  render() {
    return (
      <div>
        <Header />
        <div id="page-wrapper">
          <div className="container">
            <div className="row">
              <DailyChores />
              <WeeklyChores />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getDailyChores: PropTypes.string,
  getWeeklyChores: PropTypes.string
};

export default (App);

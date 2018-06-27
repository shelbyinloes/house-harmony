import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import DailyChoresContainer from "./containers/DailyChoresContainer";
import WeeklyChoresContainer from "./containers/WeeklyChoresContainer";


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
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/dailyChores" component={DailyChoresContainer} />
            <Route path="/weeklyChores" component={WeeklyChoresContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getDailyChores: PropTypes.string,
  getWeeklyChores: PropTypes.string
};

export default (App);

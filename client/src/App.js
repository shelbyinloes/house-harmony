import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import ChoreContainer from "./containers/ChoreContainer";
import DailyChoreContainer from "./containers/DailyChoreContainer";
import WeeklyChoreContainer from "./containers/WeeklyChoreContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      Chores: [],
      dailyChores: [],
      weeklyChores: []
    };
  }
  
  componentDidMount() {
    this.props.loadChores();
    this.props.loadDailyChores();
    this.props.loadWeeklyChores();
  }

  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/Chore/:id" component={ChoreContainer} />
            <Route path="/dailyChore/:id" component={DailyChoreContainer} />
            <Route path="/weeklyChore/:id" component={WeeklyChoreContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadChores: PropTypes.string
};

export default (App);

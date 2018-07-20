import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import DailyChoreContainer from "./containers/DailyChoreContainer";
import WeeklyChoreContainer from "./containers/WeeklyChoreContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyChores: [],
      weeklyChores: []
    };
  }
  
  componentDidMount() {
    this.props.loadDailyChores();
    this.props.loadWeeklyChores();
  }

  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/dailyChore/:id" component={DailyChoreContainer} />
            <Route path="/weeklyChore/:id" component={WeeklyChoreContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   name: PropTypes.string
// };

export default (App);

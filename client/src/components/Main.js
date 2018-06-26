import React from "react";
import "../App.css";
import Header from "./Header";
import DailyChores from "../containers/DailyChoresContainer";
import WeeklyChores from "../containers/WeeklyChoresContainer";


function Main() {
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

export default Main;

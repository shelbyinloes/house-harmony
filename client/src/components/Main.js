import React from "react";
import "../App.css";
import Header from "./Header";
// import DailyChoresContainer from "../containers/DailyChoresContainer";
// import WeeklyChoresContainer from "../containers/WeeklyChoresContainer";
// import CreateChoresContainer from "../containers/CreateChoresContainer";
// import AdminContainer from "../containers/AdminContainer";
import AdminContainer2 from "../containers/AdminContainer2";


function Main() {
  return (
    <div>
      <Header />
      <div id="page-wrapper">
        <div className="container">
          <div className="row">
            {/* <AdminContainer /> */}
          </div>
          <div className="row">
            <AdminContainer2 />
          </div>
          <div className="row">
            {/* <DailyChoresContainer />
            <WeeklyChoresContainer /> */}
          </div>
          {/* <CreateChoresContainer /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;

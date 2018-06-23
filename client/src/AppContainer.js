import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { fetchDailyChores, fetchWeeklyChores } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    getDailyChores() {
      const action = fetchDailyChores();
      dispatch(action);
    }, 

    getWeeklyChores() {
      const action = fetchWeeklyChores();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

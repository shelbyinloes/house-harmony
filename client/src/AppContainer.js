import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadDailyChores, loadWeeklyChores } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadDailyChores() {
      dispatch(loadDailyChores());
    }, 

    loadWeeklyChores() {
      dispatch(loadWeeklyChores());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadDailyChores, loadWeeklyChores, loadChores } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadChores() {
      dispatch(loadChores());
    },
    loadDailyChores() {
      dispatch(loadDailyChores());
    }, 

    loadWeeklyChores() {
      dispatch(loadWeeklyChores());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

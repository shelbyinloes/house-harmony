import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadDailyChores, loadWeeklyChores } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadDailyChores() {
      const action = loadDailyChores();
      dispatch(action);
    }, 

    loadWeeklyChores() {
      const action = loadWeeklyChores();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);

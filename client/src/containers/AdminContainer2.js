import { connect } from "react-redux";
import Admin2 from "../components/Admin2";
// import WeeklyChores from "../components/WeeklyChores";
// import DailyChores from "../components/DailyChores";

function mapStateToProps(state) {
  return {
    chores: state.chore
  };
}

export default connect(mapStateToProps)(Admin2);

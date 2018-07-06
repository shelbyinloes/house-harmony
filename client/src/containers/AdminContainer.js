import { connect } from "react-redux";
import Admin from "../components/Admin";
// import WeeklyChores from "../components/WeeklyChores";
// import DailyChores from "../components/DailyChores";

function mapStateToProps(state) {
  return {
    weeklyChores: state.weeklyChores,
    dailyChores: state.dailyChores
  };
}

export default connect(mapStateToProps)(Admin);

import { connect } from "react-redux";
import WeeklyChores from "../components/WeeklyChores";

function mapStateToProps(state) {
  return {
    weeklyChores: state.weeklyChores
  };
}

export default connect(mapStateToProps)(WeeklyChores);

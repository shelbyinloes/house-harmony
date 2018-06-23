import { connect } from "react-redux";
import DailyChores from "../components/DailyChores";

function mapStateToProps(state) {
  return {
    dailyChores: state.dailyChores
  };
}

export default connect(mapStateToProps)(DailyChores);

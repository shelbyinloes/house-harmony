import { connect } from "react-redux";
import CreateChores from "../components/CreateChores";
import {
  createDailyChore,
  createWeeklyChore
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createDailyChore: function (day) {
      dispatch(createDailyChore(day));
    },
    createWeeklyChore: function (week) {
      dispatch(createWeeklyChore(week));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateChores);
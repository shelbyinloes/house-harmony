import { connect } from "react-redux";
import CreateChores from "../components/CreateChores";
import {
  createDailyChore,
  createWeeklyChore
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createDailyChore: function (chore) {
      dispatch(createDailyChore(chore));
    },
    createWeeklyChore: function (chore) {
      dispatch(createWeeklyChore(chore));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateChores);

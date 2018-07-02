import { connect } from "react-redux";
import WeeklyChore from "../components/WeeklyChore";
import { loadWeeklyChore } from "../actions/index";

const mapStateToProps = (state) => ({weeklyChore: state.weeklyChore});
const mapDispatchToProps = (dispatch) => ({
  loadWeeklyChore: (id) => {dispatch(loadWeeklyChore(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyChore);

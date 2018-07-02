import { connect } from "react-redux";
import DailyChore from "../components/DailyChore";
import { loadDailyChore } from "../actions/index";

const mapStateToProps = (state) => ({dailyChore: state.dailyChore});
const mapDispatchToProps = (dispatch) => ({
  loadDailyChore: (id) => {dispatch(loadDailyChore(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyChore);

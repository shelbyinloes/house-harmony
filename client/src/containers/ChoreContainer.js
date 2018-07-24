import { connect } from "react-redux";
import Chore from "../components/Chore";
import { loadChore } from "../actions/index";

const mapStateToProps = (state) => ({chore: state.chore});
const mapDispatchToProps = (dispatch) => ({
  loadChore: (id) => dispatch(loadChore(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chore);

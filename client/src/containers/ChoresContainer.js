import { connect } from "react-redux";
import Chores from "../components/Chores";

function mapStateToProps(state) {
  return {
    chores: state.chores
  };
}

export default connect(mapStateToProps)(Chores);

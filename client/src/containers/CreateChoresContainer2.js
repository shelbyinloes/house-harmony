import { connect } from "react-redux";
import CreateChores2 from "../components/CreateChores2";
import {
  createChore
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createChore(chore) {
      dispatch(createChore(chore));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateChores2);

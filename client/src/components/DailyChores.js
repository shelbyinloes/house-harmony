import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

function DailyChores(props) {
  const dashDiv = {
    padding: "15px",
    backgroundColor: "blue",
    borderRadius: "5px",
    margin: "10px"
  };
      
  return ( 
    <div style={dashDiv} className="col-sm-6">
      <p>{props.dailyChores}</p>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     newComments: state.newComments
//   };
// }
   
// const CommentsContainer = connect(mapStateToProps)(Comments);

DailyChores.propTypes = {
  dailyChores: PropTypes.string
};

export default DailyChores;

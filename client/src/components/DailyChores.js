import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

function DailyChores(props) {
  const dashDiv = {
    padding: "10px",
    backgroundColor: "blue",
    borderRadius: "5px"
  };
      
  return ( 
    <div style={dashDiv} className="col-sm-6">
      <h3>Daily Chores</h3>
      <ul>
        {props.dailyChores.map((chore, i) => {
          return <li key={i}>{chore}</li>;
        })}
      </ul>
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

import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

function WeeklyChores(props) {
  const dashDiv = {
    padding: "15px",
    backgroundColor: "pink",
    borderRadius: "5px", 
    margin: "10px"
  };

  return ( 
    <div style={dashDiv} className="col-sm-6">
      {props.weeklyChores.map((chore, i) => (
        <p key="chore">{props.weeklyChores}</p>
      ))}
    </div>
  );
}


WeeklyChores.propTypes = {
  weeklyChores: PropTypes.string
};

export default WeeklyChores;

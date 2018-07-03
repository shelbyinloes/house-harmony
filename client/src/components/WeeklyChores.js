import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function WeeklyChores(props) {
  return (
    <div>
      <h2>Weekly Chore List</h2>
      <CollapsableMapper data={props.weeklyChores} path="weeklyChore" field="chore" />
    </div>
  );
}

export default WeeklyChores;


// import React from "react";
// import PropTypes from "prop-types";
// // import { connect } from "react-redux";

// function WeeklyChores(props) {
//   const dashDiv = {
//     padding: "10px",
//     backgroundColor: "pink",
//     borderRadius: "5px"
//   };

//   return ( 
//     <div style={dashDiv} className="col-sm-6">
//       <h3>Weekly Chores</h3>
//       <ul>
//         {props.weeklyChores.map((chore, i) => {
//           return <li key={i}>{chore}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }


// WeeklyChores.propTypes = {
//   weeklyChores: PropTypes.string
// };

// export default WeeklyChores;


import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

class DailyChores extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadDailyChore(id);
  }
  
  render() {
    const dashDiv = {
      padding: "10px",
      backgroundColor: "blue",
      borderRadius: "5px"
    };
      
    return ( 
      <div style={dashDiv} className="col-sm-6">
        <h3>Daily Chores</h3>
        <li>{this.props.dailyChores.chore}</li>
      </div>
    );
  }
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

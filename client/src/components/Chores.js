import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import {ProgressBar} from "react-bootstrap";

function Chores(props) {
  return (
    <div className="col-sm-6">
      <h2>Chore List</h2>
      <CollapsableMapper data={props.chores} path="chore" field="chore" />
      <ProgressBar now={60} />
    </div>
  );
}
export default Chores;

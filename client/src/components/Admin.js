import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import CreateChoresContainer from "../containers/CreateChoresContainer";
import {Tabs, Tab} from "react-bootstrap";

function DailyChores(props) {
  return (
    <div className="col-sm-6">
      <h2>Daily Chore Admin</h2>
      <CollapsableMapper data={props.dailyChores} path="dailyChore" field="chore" />
      <CollapsableMapper data={props.weeklyChores} path="weeklyChore" field="chore" />
      <CreateChoresContainer />
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">
          Tab 1 content
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled>
          Tab 3 content
        </Tab>
      </Tabs>
    </div>
  );
}
export default DailyChores;

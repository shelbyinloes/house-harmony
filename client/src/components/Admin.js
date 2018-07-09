import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import CreateChoresContainer from "../containers/CreateChoresContainer";
import {Tabs, Tab} from "react-bootstrap";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      dailyChore: {
        chore: ""
      },
      weeklyChore: {
        chore: ""
      }
    };
  }
  render() {
    return (
      <div className="col-sm-6">
        <h2>Daily Chore Admin</h2>
        <CreateChoresContainer />
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Kid 1">
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
          </Tab>
          <Tab eventKey={2} title="Kid 2">
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
          </Tab>
          <Tab eventKey={3} title="Kid 3" disabled>
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Admin;

import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import CreateChoresContainer from "../containers/CreateChoresContainer";
import {Tabs, Tab} from "react-bootstrap";

class Admin2 extends Component {
  constructor() {
    super();
    this.state = {
      tabs: ["Charlie", "Becca", "Jackson"],
      input: ""
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.state.tabs.push(this.state.input);
    this.setState({
      ...this.state
    });
  }

  updateInput = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const tabStyle = {
      padding: "10px"
    };
    return (
      <div style={tabStyle}>
        <h2>Daily Chore Admin</h2>
        <Tabs defaultActiveKey={1}>

          {this.state.tabs.map((item, index) =>
            <Tab eventKey={{index}} title={item} key={this.state.tabs + index}>
              <CollapsableMapper data={this.props.chores} path="chore" field="chore" />
              <CreateChoresContainer />
            </Tab>
          )}
          {/* tab div here '+' */}
        </Tabs>
        
        <form onSubmit={this.formSubmit}>
          <input type="text" onChange={this.updateInput} />
          <button type="submit">Submit</button>
        </form>

        <CollapsableMapper data={this.props.chores} path="chore" field="chore" />

      </div>
    );
  }
}
export default Admin2;

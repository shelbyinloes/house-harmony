import React from "react";

class CreateChores extends React.Component {
  constructor() {
    super();
    this.state = {
      chore: {
        task: "",
        progress: true,
        time: ""
      }
    };
  }

  //  NOT FINISHED
  render() {
    return (
      <div>
        <div className="col-sm-6">
          <h3>Add to Chores</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createChore) {
              this.props.createChore(this.state.chore);
            }
          }}>
            <div>
              Task: <input onChange={(e) => {
                const chore = {task: e.target.value};
                this.setState({
                  task: Object.assign(this.state.chore.task,chore.task)
                });
              }} />
            </div>
            <div>
              Due On: <input onChange={(e) => {
                const chore = {time: e.target.value};
                this.setState({
                  time: Object.assign(this.state.chore.time,chore.time)
                });
              }} />
            </div>
            <button>Create</button> 
          </form>
        </div>
      </div>
      
    );
  }
}
export default CreateChores;

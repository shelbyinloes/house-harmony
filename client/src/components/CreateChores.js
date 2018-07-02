import React from "react";

class CreateChores extends React.Component {
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
      <div>
        <div>
          <h1>Daily Chores</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createDailyChore) {
              this.props.createDailyChore(this.state.dailyChore);
            }
          }}>
            <div>
              Chore: <input onChange={(e) => {
                const dailyChore = {chore: e.target.value};
                this.setState({
                  chore: Object.assign(this.state.dailyChore,dailyChore)
                });
              }} />
            </div>
            <button>Create</button> 
          </form>
        </div>
        <div>
          <h1>Weekly Chores</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createWeeklyChore) {
              this.props.createWeeklyChore(this.state.weeklyChore);
            }
          }}>
            <div>
              Chore: <input onChange={(e) => {
                const weeklyChore = {chore: e.target.value};
                this.setState({
                  chore: Object.assign(this.state.weeklyChore,weeklyChore)
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

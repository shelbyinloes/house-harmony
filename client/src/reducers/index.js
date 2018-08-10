import { combineReducers } from "redux";

function chores(state = [], action) { 
  if (action.type === "CHORES_LOADED") {
    return action.value;
  }
  return state;
}

function chore(state = [], action) {
  if (action.type === "CHORE_DONE") {
    return action.value;
  }
  return state;
}

// function dailyChores(state = [], action) { 
//   if (action.type === "DAILY_CHORES_LOADED") {
//     return action.value;
//   }
//   return state;
// }

// function dailyChore(state = [], action) {
//   if (action.type === "GET_DAILY_CHORE_DONE") {
//     return action.value;
//   }
//   return state;
// }

// function weeklyChores(state = [], action) { 
//   if (action.type === "WEEKLY_CHORES_LOADED") {
//     return action.value;
//   }
//   return state;
// }

// function weeklyChore(state = [], action) {
//   if (action.type === "GET_WEEKLY_CHORE_DONE") {
//     return action.value;
//   }
//   return state;
// }

const rootReducer = combineReducers({
  chores, chore
});
export default rootReducer;

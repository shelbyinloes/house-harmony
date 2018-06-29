import { combineReducers } from "redux";

function dailyChores(state = [], action) { 
  if (action.type === "DAILY_CHORES_LOADED") {
    return action.value;
  }
  return state;
}

function dailyChore(state = [], action) {
  if (action.type === "GET_DAILY_CHORE_DONE") {
    return action.value;
  }
  return state;
}

function weeklyChores(state = [], action) { 
  if (action.type === "WEEKLY_CHORES_LOADED") {
    return action.value;
  }
  return state;
}

function weeklyChore(state = [], action) {
  if (action.type === "GET_WEEKLY_CHORE_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  dailyChores, weeklyChores, dailyChore, weeklyChore
});
export default rootReducer;

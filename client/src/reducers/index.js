import { combineReducers } from "redux";

function Chores(state = [], action) { 
  if (action.type === "CHORES_LOADED") {
    return action.value;
  }
  return state;
}

function Chore(state = [], action) {
  if (action.type === "CHORE_DONE") {
    return action.value;
  }
  return state;
}

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
  Chores, Chore, dailyChores, weeklyChores, dailyChore, weeklyChore
});
export default rootReducer;

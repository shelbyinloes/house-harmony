import { combineReducers } from "redux";

function dailyChores(state = [], action) { 
  if (action.type === "DAILY_CHORES_FETCHED") {
    return action.value;
  }
  return state;
}

function weeklyChores(state = [], action) { 
  if (action.type === "WEEKLY_CHORES_FETCHED") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  dailyChores, weeklyChores
});
export default rootReducer;

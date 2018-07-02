export function loadDailyChores() {
  return function (dispatch) {
    fetch("/dailyChores")
        .then( (response) => {
          return response.json();
        }).then((dailyChores) => {
          dispatch(dailyChoresLoaded(dailyChores));
        });
  };
}

export function dailyChoresLoaded(dailyChores) {
  return {
    type: "DAILY_CHORES_LOADED",
    value: dailyChores
  };
}

function dailyChoreLoaded(dailyChore) {
  return {
    type: "GET_DAILY_CHORE_DONE",
    value: dailyChore
  };
}

export function loadDailyChore(id) {
  return function (dispatch) {
    fetch(`/dailyChore/${id}`)
    .then( (response) => {
      return response.json();
    }).then( (dailyChore) => {
      dispatch(dailyChoreLoaded(dailyChore));
    });
  };
}

export function createDailyChore(c) {
  return function (dispatch) {
    fetch("/dailyChores", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadDailyChores()));
  };
}


//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export function loadWeeklyChores() {
  return function (dispatch) {
    fetch("/weeklyChores")
        .then( (response) => {
          return response.json();
        }).then((weeklyChores) => {
          dispatch(weeklyChoresLoaded(weeklyChores));
        });
  };
}

export function weeklyChoresLoaded(weeklyChores) {
  return {
    type: "WEEKLY_CHORES_LOADED",
    value: weeklyChores
  };
}

function weeklyChoreLoaded(weeklyChore) {
  return {
    type: "GET_WEEKLY_CHORE_DONE",
    value: weeklyChore
  };
}

export function loadWeeklyChore(id) {
  return function (dispatch) {
    fetch(`/weeklyChore/${id}`)
    .then( (response) => {
      return response.json();
    }).then( (weeklyChore) => {
      dispatch(weeklyChoreLoaded(weeklyChore));
    });
  };
}

export function createWeeklyChore(c) {
  return function (dispatch) {
    fetch("/weeklyChores", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadWeeklyChores()));
  };
}

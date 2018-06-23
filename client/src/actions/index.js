export function fetchDailyChores() {
  return function (dispatch) {
    fetch("http://localhost:3101/dailyChores")
        .then( (response) => {
          return response.json();
        }).then((dailyChores) => {
          dispatch(dailyChoresFetched(dailyChores));
        });
  };
}

export function dailyChoresFetched(dailyChores) {
  return {
    type: "DAILY_CHORES_FETCHED",
    value: dailyChores
  };
}


//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export function fetchWeeklyChores() {
  return function (dispatch) {
    fetch("http://localhost:3101/weeklyChores")
          .then( (response) => {
            return response.json();
          }).then((weeklyChores) => {
            dispatch(weeklyChoresFetched(weeklyChores));
          });
  };
}
  
export function weeklyChoresFetched(weeklyChores) {
  return {
    type: "WEEKLY_CHORES_FETCHED",
    value: weeklyChores
  };
}

export function loadChores() {
  return function (dispatch) {
    fetch("/chores")
        .then( (response) => {
          return response.json();
        }).then((chores) => {
          dispatch(choresLoaded(chores));
        });
  };
}

export function choresLoaded(chores) {
  return {
    type: "CHORES_LOADED",
    value: chores.task
  };
}

function choreLoaded(chore) {
  return {
    type: "GET_CHORE_DONE",
    value: chore
  };
}

export function loadDailyChore(id) {
  return function (dispatch) {
    fetch(`/chore/${id}`)
    .then( (response) => {
      return response.json();
    }).then( (chore) => {
      dispatch(choreLoaded(chore));
    });
  };
}

export function createChore(c) {
  return function (dispatch) {
    fetch("/chores", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadChores()));
  };
}


//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
// export function loadWeeklyChores() {
//   return function (dispatch) {
//     fetch("/weeklyChores")
//         .then( (response) => {
//           return response.json();
//         }).then((weeklyChores) => {
//           dispatch(weeklyChoresLoaded(weeklyChores));
//         });
//   };
// }

// export function weeklyChoresLoaded(weeklyChores) {
//   return {
//     type: "WEEKLY_CHORES_LOADED",
//     value: weeklyChores
//   };
// }

// function weeklyChoreLoaded(weeklyChore) {
//   return {
//     type: "GET_WEEKLY_CHORE_DONE",
//     value: weeklyChore
//   };
// }

// export function loadWeeklyChore(id) {
//   return function (dispatch) {
//     fetch(`/weeklyChore/${id}`)
//     .then( (response) => {
//       return response.json();
//     }).then( (weeklyChore) => {
//       dispatch(weeklyChoreLoaded(weeklyChore));
//     });
//   };
// }

// export function createWeeklyChore(c) {
//   return function (dispatch) {
//     fetch("/weeklyChores", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(c)
//     }).then(() => dispatch(loadWeeklyChores()));
//   };
// }

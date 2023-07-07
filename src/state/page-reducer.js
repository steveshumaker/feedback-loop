function pageReducer(state = 0, action) {
  switch(action.type) {
    case `NEXT_PAGE`:
      return state + 1;
    case `PREVIOUS_PAGE`:
      return state - 1;
    case `RESET`:
      return state = 0;
    default:
      return state
  }
}

export default pageReducer;
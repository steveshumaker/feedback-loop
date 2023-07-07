function submissionReducer(state = {}, action) {
  switch (action.type) {
    case `ADD_FEELING`:
      return { ...state, feeling: action.payload };
    case `ADD_UNDERSTANDING`:
      return {...state, understanding: action.payload};
    case `ADD_SUPPORT`:
      return {...state, support: action.payload};
    case `ADD_COMMENTS`:
      return {...state, comments: action.payload};

  }
  return state;
}

export default submissionReducer;

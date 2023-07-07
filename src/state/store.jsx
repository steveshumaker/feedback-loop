import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import pageReducer from "./page-reducer";
import submissionReducer from "./submission-reducer";

const store = createStore(
  combineReducers({
    pages: pageReducer,
    submission: submissionReducer,
  }),
  applyMiddleware(logger)
);

export default store;
import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import chats from "./chatReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  chats,
  apiCallsInProgress,
});

export default rootReducer;

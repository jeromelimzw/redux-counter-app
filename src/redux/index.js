// Here, we re-export our operations, reducers and action types.
// Note that we do not export our action creators themselves,
// since we pass them through our operations.

import { combineReducers } from "redux";
import { counter } from "./reducers";

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

// The reducer deals with updating the state.
// We define one reducer for each action in the form of a switch case.

import { INCREMENT, DECREMENT } from "./types";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

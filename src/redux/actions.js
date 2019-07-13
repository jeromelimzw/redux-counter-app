// This is where you define your ACTION CREATORS.
// All action creators must be functions that return an
// object with at least the type property.
// We do not define any async logic in this file.
import { INCREMENT, DECREMENT } from "./types";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

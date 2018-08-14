import { INR_CNTR, DCR_CNTR } from "../actions";
import { combineReducers } from "redux";

function counter(state = 0, action) {
  if (typeof state === "undefined") {
    return 0;
  }
  let newState;
  switch (action.type) {
    case INR_CNTR:
      return (newState = state + action.payload);
    case DCR_CNTR:
      return (newState = state - action.payload);
    default:
      return state;
  }
}
const mainReducer = combineReducers({ counter });
export default mainReducer;

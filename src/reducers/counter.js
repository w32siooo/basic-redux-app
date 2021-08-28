import { ACTION_DECREMENT_STATE, ACTION_INCREMENT_STATE } from "../constants";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTION_INCREMENT_STATE:
      return state + action.payload;
    case ACTION_DECREMENT_STATE:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;

import { ACTION_SAVE_TEXT } from "../constants";

const defaultState = {
  text: "hello",
};

const saveTextReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_SAVE_TEXT:
      return (state.text = { text: action.payload });
    default:
      return state;
  }
};

export default saveTextReducer;

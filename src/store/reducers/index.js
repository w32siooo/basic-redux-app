import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import saveTextReducer from "./saveText";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  saveText: saveTextReducer,
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;

import axios from "axios";
import { ACTION_INCREMENT_STATE } from "../constants";
import { saveText, decrement } from "../actions";

export const exampleMiddleWare =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_INCREMENT_STATE) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/2")
        .then((response) => {
          console.log(response.data.title);
          dispatch(saveText(response.data.title));
        });
    }
  };

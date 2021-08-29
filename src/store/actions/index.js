import {
  ACTION_INCREMENT_STATE,
  ACTION_DECREMENT_STATE,
  ACTION_SAVE_TEXT,
  ACTION_MULTIPLY_STATE,
} from "../constants";

export const increment = (num) => {
  return {
    type: ACTION_INCREMENT_STATE,
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: ACTION_DECREMENT_STATE,
    payload: num,
  };
};

export const multiply = (num) => {
  return {
    type: ACTION_MULTIPLY_STATE,
    payload: num,
  };
};

export const saveText = (text) => {
  return {
    type: ACTION_SAVE_TEXT,
    payload: text,
  };
};

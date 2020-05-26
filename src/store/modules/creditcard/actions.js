// ActionTypes
export const SET_NUMBER = "SET_NUMBER";
export const SET_NAME = "SET_NAME";
export const SET_CVC = "SET_CVC";
export const SET_EXPIRY = "SET_EXPIRY";
export const SET_SPLIT = "SET_SPLIT";
export const SET_FOCUS = "SET_FOCUS";

// Action creators
export const setNumber = (number) => ({
  type: "SET_NUMBER",
  payload: number,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});
export const setCVC = (cvc) => ({
  type: "SET_CVC",
  payload: cvc,
});
export const setExpiry = (expiry) => ({
  type: "SET_EXPIRY",
  payload: expiry,
});
export const setSplit = (split) => ({
  type: "SET_SPLIT",
  payload: split,
});
export const setFocus = (focus) => ({
  type: "SET_FOCUS",
  payload: focus,
});

import {
  SET_NUMBER,
  SET_NAME,
  SET_CVC,
  SET_SPLIT,
  SET_EXPIRY,
  SET_FOCUS,
} from "../creditcard/actions";

const INITIAL_STATE = {
  name: "",
  number: "",
  cvc: "",
  expiry: "",
  split: "",
  focus: "",
};

export default function creditcard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_NUMBER:
      return { ...state, number: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EXPIRY:
      return { ...state, expiry: action.payload };
    case SET_CVC:
      return { ...state, cvc: action.payload };
    case SET_SPLIT:
      return { ...state, split: action.payload };
    case SET_FOCUS:
      return { ...state, focus: action.payload };
    default:
      return state;
  }
}

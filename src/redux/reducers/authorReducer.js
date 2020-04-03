import { LOAD_AUTHORS_SUCCESS } from "../constants";
import initialState from "./initialState";

export default function courseReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

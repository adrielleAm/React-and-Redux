import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../constants";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case LOAD_COURSES_SUCCESS:
      return action.course;
    default:
      return state;
  }
}

import {
  CREATE_COURSES_SUCCESS,
  SAVE_COURSES_SUCCESS,
  LOAD_COURSES_SUCCESS
} from "../constants";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSES_SUCCESS:
      return [...state, { ...action.course }];
    case SAVE_COURSES_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case LOAD_COURSES_SUCCESS:
      return action.course;
    default:
      return state;
  }
}

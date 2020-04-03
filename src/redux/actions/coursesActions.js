import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../constants";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

export function loadCoursesSuccess(course) {
  return { type: LOAD_COURSES_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

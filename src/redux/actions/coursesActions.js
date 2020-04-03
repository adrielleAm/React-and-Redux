import {
  LOAD_COURSES_SUCCESS,
  SAVE_COURSES_SUCCESS,
  CREATE_COURSES_SUCCESS
} from "../constants";
import * as courseApi from "../../api/courseApi";

export function loadCoursesSuccess(course) {
  return { type: LOAD_COURSES_SUCCESS, course };
}

export function updateCoursesSuccess(course) {
  return { type: SAVE_COURSES_SUCCESS, course };
}

export function createCoursesSuccess(course) {
  return { type: CREATE_COURSES_SUCCESS, course };
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

export function saveCourses(course) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(saveCourse => {
        course.id
          ? dispatch(updateCoursesSuccess(saveCourse))
          : dispatch(createCoursesSuccess(saveCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}

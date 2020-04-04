import {
  LOAD_COURSES_SUCCESS,
  SAVE_COURSES_SUCCESS,
  CREATE_COURSES_SUCCESS,
  DELETE_COURSE_OPTIMISTIC
} from "../constants";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoursesSuccess(course) {
  return { type: LOAD_COURSES_SUCCESS, course };
}

export function updateCoursesSuccess(course) {
  return { type: SAVE_COURSES_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: DELETE_COURSE_OPTIMISTIC, course };
}

export function createCoursesSuccess(course) {
  return { type: CREATE_COURSES_SUCCESS, course };
}
export function loadCourses() {
  return async function(dispatch) {
    dispatch(beginApiCall());
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}

export function saveCourses(course) {
  //eslint-disable-next-line no-unused-vars
  return async function(dispatch, getState) {
    dispatch(beginApiCall());
    try {
      const saveCourse = await courseApi.saveCourse(course);
      course.id
        ? dispatch(updateCoursesSuccess(saveCourse))
        : dispatch(createCoursesSuccess(saveCourse));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

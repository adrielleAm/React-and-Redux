import * as coursesActions from "./coursesActions";
import {
  CREATE_COURSES_SUCCESS,
  BEGIN_API_CALL,
  LOAD_COURSES_SUCCESS,
} from "../constants";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Courses Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: BEGIN_API_CALL },
        { type: LOAD_COURSES_SUCCESS, course: courses },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(coursesActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createCourseSuccess", () => {
  it("should create a CREAT_COURSE_SUCCESS action", () => {
    //arrange
    const course = courses[0];
    const expectAction = {
      type: CREATE_COURSES_SUCCESS,
      course,
    };

    //act
    const action = coursesActions.createCoursesSuccess(course);

    //assert
    expect(action).toEqual(expectAction);
  });
});

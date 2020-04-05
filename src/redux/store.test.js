import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import { createCoursesSuccess } from "./actions/coursesActions";

it("Should handle creating courses", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  // act
  const action = createCoursesSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});

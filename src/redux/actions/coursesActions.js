import { CREATE_COURSE } from "../constants";

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

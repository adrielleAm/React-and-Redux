export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const SAVE_COURSES_SUCCESS = "SAVE_COURSES_SUCCESS";
export const CREATE_COURSES_SUCCESS = "CREATE_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const BEGIN_APi_CALL = "BEGIN_APi_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

import { BEGIN_API_CALL, API_CALL_ERROR } from "../constants";
import initialState from "./initialState";

function actionTypeEndsinSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsProgress,
  action
) {
  if (action.type === BEGIN_API_CALL) return state + 1;
  else if (
    action.type === API_CALL_ERROR ||
    actionTypeEndsinSuccess(action.type)
  )
    return state - 1;

  return state;
}

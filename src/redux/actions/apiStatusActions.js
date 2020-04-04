import { BEGIN_APi_CALL, API_CALL_ERROR } from "../constants";

export function beginApiCall() {
  return { type: BEGIN_APi_CALL };
}
export function apiCallError() {
  return { type: API_CALL_ERROR };
}

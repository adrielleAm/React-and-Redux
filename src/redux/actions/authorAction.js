import { LOAD_AUTHORS_SUCCESS } from "../constants";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async function(dispatch) {
    dispatch(beginApiCall());
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
}

import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, FETCH_USERS, CHANGE_AUTH, CHART_DAILY_RESULT_SUCCESS } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
export function fetchUsers() {
  const userResponse = axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    type: FETCH_USERS,
    payload: userResponse
  };
}
export function fetchDailyResult() {
  const dailyResponse = axios.get("https://api.rootnet.in/covid19-in/stats/daily");
  return {
    type: CHART_DAILY_RESULT_SUCCESS,
    payload: dailyResponse
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

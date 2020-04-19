import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";
import authReducer from "reducers/auth";
import userReducer from "reducers/users";
import dailyResultReducer from "reducers/dashboard";

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  users: userReducer,
  daily_result: dailyResultReducer
});

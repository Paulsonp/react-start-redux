import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";
import authReducer from "reducers/auth";
import userReducer from "reducers/users";

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  users: userReducer
});

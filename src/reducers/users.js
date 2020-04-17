import { FETCH_USERS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      const users = action.payload.data.map(user => user);
      return [...state, ...users];

    default:
      return state;
  }
}

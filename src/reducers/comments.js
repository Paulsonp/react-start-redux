import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      // Full JSON date
      // const data = action.payload.data;
      // console.log("hai", data);
      // Mapping form JSON
      const comments = action.payload.data.map(comment => comment);
      console.log("hai", action.payload);
      return [...state, ...comments];

    default:
      return state;
  }
}

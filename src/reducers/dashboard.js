import { CHART_DAILY_RESULT_SUCCESS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case CHART_DAILY_RESULT_SUCCESS:
      const dailyresult = action.payload.data.data.map(res => res);
      console.log("ff", dailyresult);
      return [...state, ...dailyresult];

    default:
      return state;
  }
}

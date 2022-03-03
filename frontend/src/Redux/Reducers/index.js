import { combineReducers } from "redux";
const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH-ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ postReducer: postReducer });

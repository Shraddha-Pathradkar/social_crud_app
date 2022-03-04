import { combineReducers } from "redux";
const postReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((post) => post._id !== action.payload._id);
    case "UPDATE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH-ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ postReducer: postReducer });

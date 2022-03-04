import { combineReducers } from "redux";
import { actionName } from "../Constants/action-names";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case actionName.likesUpdate:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionName.delete:
      return state.filter((post) => post._id !== action.payload._id);
    case actionName.update:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionName.fetchAll:
      return action.payload;
    case actionName.create:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ postReducer: postReducer });

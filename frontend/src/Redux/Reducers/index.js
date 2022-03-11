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

const googleLogin = (state = { payload: null }, action) => {
  switch (action.type) {
    case actionName.login:
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, payload: action?.payload };

    default:
      return state;
  }
};

const logout = (state = { payload: null }, action) => {
  switch (action.type) {
    case actionName.logout:
      localStorage.clear();
      return { ...state, payload: null };

    default:
      return state;
  }
};

export default combineReducers({
  postReducer: postReducer,
  googleLoginReducer: googleLogin,
  logoutReducer: logout,
});

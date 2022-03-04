import * as api from "./api";
import { actionName } from "../Constants/action-names";
// action creators

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const actionObject = { type: actionName.fetchAll, payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const response = await api.createPost(newPost);
    const actionObject = { type: actionName.create, payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, updatedPost);
    const actionObject = { type: actionName.update, payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const response = await api.deletePost(id);
    const actionObject = { type: actionName.delete, payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await api.likePost(id, updatedPost);
    const actionObject = {
      type: actionName.likesUpdate,
      payload: response.data,
    };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

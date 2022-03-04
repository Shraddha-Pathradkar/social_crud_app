import * as api from "./api";
// action creators

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const actionObject = { type: "FETCH-ALL", payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const response = await api.createPost(newPost);
    const actionObject = { type: "CREATE", payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, updatedPost);
    const actionObject = { type: "UPDATE", payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const response = await api.deletePost(id);
    const actionObject = { type: "DELETE", payload: response.data };
    dispatch(actionObject);
  } catch (error) {
    console.log(error.message);
  }
};

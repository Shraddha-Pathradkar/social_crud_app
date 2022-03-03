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

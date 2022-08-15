import * as PostsApi from "../api/PostRequest";

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await PostsApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "GET_POSTS_REQUEST" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "GET_POSTS_FAIL" });
  }
};

import axios from "axios";
import { toast } from "react-toastify";

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5030/getPosts");
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5030/createPost",
      postData
    );
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const updatePostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5030/updatePost/${id}`,
      postData
    );
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5030/deletePost/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

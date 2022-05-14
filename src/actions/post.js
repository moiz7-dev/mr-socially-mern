import axios from "../utils/axios";
import { ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../constants/post";

export const addNewPost = (newPost) => async (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST });

  try {
    const {data} = await axios.post('/api/post/new', newPost);

    dispatch({ type: ADD_POST_SUCCESS, payload: data.success });
  } catch (err) {
    dispatch({ type: ADD_POST_FAIL, payload: err.response.data.message });
  }
};

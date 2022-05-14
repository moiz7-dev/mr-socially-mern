import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_RESET,
  CLEAR_ERRORS,
} from "../constants/post";

export const addPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_POST_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
        return state;
  }
};

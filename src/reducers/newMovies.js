import {
  NEW_MOVIES_SUCCESS,
  NEW_MOVIES_LOADING,
  NEW_MOVIES_ERROR
} from "../constants";

export const newMovies = {
  result: [],
  isLoading: false,
  hasError: false
};

export default (state = newMovies, action) => {
  switch (action.type) {
    case NEW_MOVIES_SUCCESS:
      return { ...state, isLoading: false, result: action.result };
    case NEW_MOVIES_LOADING:
      return { ...state, isLoading: true };
    case NEW_MOVIES_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

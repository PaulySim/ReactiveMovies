import { MOVIE_SUCCESS, MOVIE_LOADING, MOVIE_ERROR } from "../constants";

export const movie = {
  result: null,
  isLoading: false,
  hasError: false
};

export default (state = movie, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return { ...state, isLoading: false, result: action.result };
    case MOVIE_LOADING:
      return { ...state, isLoading: true };
    case MOVIE_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

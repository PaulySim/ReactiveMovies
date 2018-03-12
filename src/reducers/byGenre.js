import {
  BY_GENRE_SUCCESS,
  BY_GENRE_LOADING,
  BY_GENRE_ERROR
} from "../constants";

export const byGenre = {
  result: [],
  isLoading: false,
  hasError: false
};

export default (state = byGenre, action) => {
  switch (action.type) {
    case BY_GENRE_SUCCESS:
      return { ...state, isLoading: false, result: action.result };
    case BY_GENRE_LOADING:
      return { ...state, isLoading: true };
    case BY_GENRE_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

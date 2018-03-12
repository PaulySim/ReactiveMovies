import {
  DISCOVER_SUCCESS,
  DISCOVER_LOADING,
  DISCOVER_ERROR
} from "../constants";

export const discover = {
  result: [],
  isLoading: false,
  hasError: false
};

export default (state = discover, action) => {
  switch (action.type) {
    case DISCOVER_SUCCESS:
      return { ...state, isLoading: false, result: action.result };
    case DISCOVER_LOADING:
      return { ...state, isLoading: true };
    case DISCOVER_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

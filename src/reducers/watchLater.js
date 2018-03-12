import { ADD_WATCH_LATER, REMOVE_WATCH_LATER } from "../constants";

export const watchLater = [];

export default (state = watchLater, action) => {
  switch (action.type) {
    case ADD_WATCH_LATER:
      return [...state, action.movie];
    case REMOVE_WATCH_LATER:
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};

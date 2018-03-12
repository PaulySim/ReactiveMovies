import { ADD_WATCHED, REMOVE_WATCHED } from "../constants";

export const watched = [];

export default (state = watched, action) => {
  switch (action.type) {
    case ADD_WATCHED:
      return [...state, action.movie];
    case REMOVE_WATCHED:
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};

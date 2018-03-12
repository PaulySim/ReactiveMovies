import { ADD_WATCHED, REMOVE_WATCHED } from "../constants";

export const addWatched = movie => ({
  type: ADD_WATCHED,
  movie
});

export const removeWatched = id => ({
  type: REMOVE_WATCHED,
  id
});

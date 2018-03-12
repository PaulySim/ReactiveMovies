import { ADD_WATCH_LATER, REMOVE_WATCH_LATER } from "../constants";

export const addWatchLater = movie => ({
  type: ADD_WATCH_LATER,
  movie
});

export const removeWatchLater = id => ({
  type: REMOVE_WATCH_LATER,
  id
});

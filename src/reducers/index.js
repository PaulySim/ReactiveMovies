import { persistCombineReducers } from "redux-persist";
import config from "./config";
import discover from "./discover";
import byGenre from "./byGenre";
import movie from "./movie";
import newMovies from "./newMovies";
import watchLater from "./watchLater";
import watched from "./watched";

export default persistCombineReducers(config, {
  discover,
  byGenre,
  movie,
  newMovies,
  watchLater,
  watched
});

import {
  NEW_MOVIES_SUCCESS,
  NEW_MOVIES_LOADING,
  NEW_MOVIES_ERROR,
  MOVIE_API_KEY,
  MOVIE_API_LANG,
  MOVIE_API_ADULT,
  movieAPI
} from "../constants";

const newMoviesSuccess = result => ({
  type: NEW_MOVIES_SUCCESS,
  result
});
const newMoviesLoading = () => ({
  type: NEW_MOVIES_LOADING
});
const newMoviesError = () => ({
  type: NEW_MOVIES_ERROR
});

export default value => dispatch => {
  dispatch(newMoviesLoading());
  movieAPI
    .url(
      `/discover/movie?${MOVIE_API_KEY}&${MOVIE_API_LANG}&region=GB&sort_by=popularity.desc&${MOVIE_API_ADULT}&include_video=false&page=1`
    )
    .get()
    .json(json => dispatch(newMoviesSuccess(json.results.slice(0, 20))))
    .catch(error => dispatch(newMoviesError()));
};

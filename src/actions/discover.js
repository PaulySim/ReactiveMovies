import {
  DISCOVER_SUCCESS,
  DISCOVER_LOADING,
  DISCOVER_ERROR,
  MOVIE_API_KEY,
  MOVIE_API_LANG,
  MOVIE_API_ADULT,
  movieAPI
} from "../constants";

const discoverSuccess = result => ({
  type: DISCOVER_SUCCESS,
  result
});
const discoverLoading = () => ({
  type: DISCOVER_LOADING
});
const discoverError = () => ({
  type: DISCOVER_ERROR
});

export default value => dispatch => {
  dispatch(discoverLoading());
  movieAPI
    .url(
      `/search/movie?${MOVIE_API_KEY}&${MOVIE_API_LANG}&query=${value}&page=1&${MOVIE_API_ADULT}`
    )
    .get()
    .json(json => {
      console.log(json);
      dispatch(discoverSuccess(json.results.slice(0, 20)));
    })
    .catch(error => dispatch(discoverError()));
};

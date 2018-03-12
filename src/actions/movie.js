import {
  MOVIE_SUCCESS,
  MOVIE_LOADING,
  MOVIE_ERROR,
  MOVIE_API_KEY,
  movieAPI
} from "../constants";

const movieSuccess = result => ({
  type: MOVIE_SUCCESS,
  result
});
const movieLoading = () => ({
  type: MOVIE_LOADING
});
const movieError = () => ({
  type: MOVIE_ERROR
});

export default movieID => dispatch => {
  dispatch(movieLoading());
  movieAPI
    .url(
      `/movie/${movieID}?${MOVIE_API_KEY}&append_to_response=videos,recommendations`
    )
    .get()
    .json(json => dispatch(movieSuccess(json)))
    .catch(error => dispatch(movieError()));
};

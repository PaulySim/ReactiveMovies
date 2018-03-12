import {
  BY_GENRE_SUCCESS,
  BY_GENRE_LOADING,
  BY_GENRE_ERROR,
  MOVIE_API_KEY,
  MOVIE_API_LANG,
  MOVIE_API_ADULT,
  movieAPI
} from "../constants";

const byGenreSuccess = result => ({
  type: BY_GENRE_SUCCESS,
  result
});
const byGenreLoading = () => ({
  type: BY_GENRE_LOADING
});
const byGenreError = () => ({
  type: BY_GENRE_ERROR
});

export default genreId => dispatch => {
  dispatch(byGenreLoading());
  const date = new Date();
  const today =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  movieAPI
    .url(
      `/discover/movie?${MOVIE_API_KEY}&${MOVIE_API_LANG}&region=GB&sort_by=popularity.desc${MOVIE_API_ADULT}&include_video=false&page=1&release_date.lte=${today}&with_genres=${genreId}`
    )
    .get()
    .json(json => dispatch(byGenreSuccess(json.results.slice(0, 20))))
    .catch(error => dispatch(byGenreError()));
};

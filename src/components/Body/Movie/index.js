import { connect } from "react-redux";
import movie from "../../../actions/movie";
import Movie from "./Movie";
import { addWatched, removeWatched } from "../../../actions/watched";
import { addWatchLater, removeWatchLater } from "../../../actions/watchLater";

const mapDispatchToProps = dispatch => ({
  movieFetch: movieID => dispatch(movie(movieID)),
  addWatched: movie => dispatch(addWatched(movie)),
  removeWatched: id => dispatch(removeWatched(id)),
  addWatchLater: movie => dispatch(addWatchLater(movie)),
  removeWatchLater: id => dispatch(removeWatchLater(id))
});
const mapStateToProps = state => ({
  movie: state.movie,
  watched: state.watched,
  watchLater: state.watchLater
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

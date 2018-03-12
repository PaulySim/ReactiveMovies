import React, { Component } from "react";
import style from "./Movie.scss";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

export default class Movie extends Component {
  state = {
    isModalOpen: false,
    watchLater: false,
    watched: false,
    movie: { isLoading: true, hasError: false, result: null }
  };

  fullMovie = movie => (
    <div className={style.movie}>
      <div className={style.movieImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p className={style.movieOverview}>{movie.overview}</p>
      </div>
      <div className={style.movieInfo}>
        <h1 className={style.movieTitle}>
          {movie.title}
          {movie.release_date !== undefined ? (
            <span className={style.movieYear} title={movie.release_date}>
              {new Date(movie.release_date).getFullYear()}
            </span>
          ) : null}
          {movie.status === "Released" ? (
            <span className={style.movieReleased} title={movie.status}>
              ✓
            </span>
          ) : (
            <span className={style.movieNotReleased} title={movie.status}>
              🞨
            </span>
          )}
        </h1>
        <h2 className={style.movieTagline}>{movie.tagline}</h2>
        <div className={style.movieGenres}>{getGenres(movie.genres)}</div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isModalOpen}
          videoId={getVideo(movie.videos.results)}
          onClose={() => this.setState({ isModalOpen: false })}
        />
        <div
          className={style.videoButton}
          onClick={() => this.setState({ isModalOpen: true })}
        >
          <span>View Trailer</span>
          <span className={style.videoPlay} />
        </div>
        {/*Movie Watch Later */}
        <button
          className={style.localButton}
          onClick={() =>
            this.state.watchLater
              ? this.props.removeWatchLater(movie.id)
              : this.props.addWatchLater(movie)
          }
        >
          {this.state.watchLater ? (
            <span className={style.watched}>On 'Watch Later'</span>
          ) : (
            <span className={style.notWatched}>Not on 'Watch Later'</span>
          )}
        </button>
        {/* Movie Watched*/}
        <button
          className={style.localButton}
          onClick={() =>
            this.state.watched
              ? this.props.removeWatched(movie.id)
              : this.props.addWatched(movie)
          }
        >
          {this.state.watched ? (
            <span className={style.watched}>Watched</span>
          ) : (
            <span className={style.notWatched}>Not Watched</span>
          )}
        </button>
        {movie.recommendations.results.length > 0 ? (
          <h2 className={style.movieRecommHeader}>Recommendations: </h2>
        ) : null}
        <div className={style.movieRecomm}>{getRecommendations(movie)}</div>
      </div>
    </div>
  );

  componentWillMount() {
    this.props.movieFetch(this.props.match.params.movieId);
    this.updateState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.watched !== nextProps.watched ||
      this.props.watchLater !== nextProps.watchLater ||
      this.props.movie !== nextProps.movie
    )
      this.updateState(nextProps);
    if (this.props.match.params.movieId !== nextProps.match.params.movieId)
      this.props.movieFetch(nextProps.match.params.movieId);
  }

  updateState(props) {
    const watched = props.watched.find(m => m.id == props.match.params.movieId);
    const watchLater = props.watchLater.find(
      m => m.id == props.match.params.movieId
    );

    this.setState({
      ...this.state,
      watched,
      watchLater,
      movie: props.movie
    });
  }
  render = () => (
    <div className={style.container}>
      {renderMovie(this.state.movie, this.fullMovie)}
    </div>
  );
}

const renderMovie = (movie, fullMovie) =>
  movie.isLoading ? (
    <p>Loading...</p>
  ) : movie.hasError ? (
    <p>An Error Occured</p>
  ) : movie.result ? (
    fullMovie(movie.result)
  ) : null;

const getGenres = genres =>
  genres.map((genre, key) => (
    <img
      key={key}
      className={style.movieGenre}
      src={require(`../../../data/emoji/${genre.name
        .toLowerCase()
        .replace(" ", "-")}.png`)}
      title={genre.name}
      alt={genre.name}
    />
  ));

const getRecommendations = movie =>
  movie.recommendations.results.length > 0
    ? movie.recommendations.results.slice(0, 4).map((movie, key) => (
        <div key={key} className={style.movieRecommImg}>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.original_title}
          />

          <Link to={`/movie/${movie.id}`} className={style.movieRecommTitle}>
            {movie.title}
          </Link>
        </div>
      ))
    : null;

const getVideo = videos =>
  videos.length > 0
    ? videos.find(video => video.type === "Trailer" && video.site === "YouTube")
        .key || null
    : null;

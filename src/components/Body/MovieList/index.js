import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data/genres.json";
import style from "./MovieList.scss";

export default ({ list }) => (
  <div className={style.container}>
    {list.length > 0 ? (
      renderMovieList(list)
    ) : (
      <div>
        <h1 className={style.headsUp}>No Movies, huh?</h1>
        <h1 className={style.headsUp}>
          Go Add a few at <Link to="/">Discover</Link>.
        </h1>
      </div>
    )}
  </div>
);

const renderMovieList = list =>
  list.map((movie, key) => (
    <div key={key} className={style.movie}>
      <img
        className={style.movieImg}
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.original_title}
      />

      <Link to={`/movie/${movie.id}`} className={style.movieTitle}>
        {movie.title}
      </Link>

      <div className={style.movieGenres}>
        {movie.genre_ids
          ? movie.genre_ids.map((genre, key) => {
              let emoji = data.genres.find(item => item.id === genre);
              return (
                <img
                  key={key}
                  className={style.movieGenre}
                  src={
                    emoji
                      ? require(`../../../data/emoji/${emoji.name
                          .toLowerCase()
                          .replace(" ", "-")}.png`)
                      : null
                  }
                  title={genre.name}
                  alt={genre.name}
                />
              );
            })
          : null}
      </div>
    </div>
  ));

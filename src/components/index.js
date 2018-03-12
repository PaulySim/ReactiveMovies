import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Body from "./Body";
import Movie from "./Body/Movie";
import Genres from "./Body/Genres";
import GenreQuery from "./Body/GenreQuery";
import MovieList from "./Body/MovieList";
import NewMovies from "./Body/NewMovies";
import Discover from "./Body/Discover";
import { connect } from "react-redux";

const App = ({ watched, watchLater }) => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Body path="/movie/:movieId" component={Movie} />
        <Body path="/genres/:genreName" component={GenreQuery} />
        <Body path="/genres" component={Genres} />
        <Body exact path="/" component={Discover} />
        <Body path="/new-movies" component={NewMovies} />
        <Body
          path="/my-collection"
          component={() => <MovieList list={watched} />}
        />
        <Body
          path="/watch-later"
          component={() => <MovieList list={watchLater} />}
        />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  watched: state.watched,
  watchLater: state.watchLater
});

export default connect(mapStateToProps, null)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import newMovies from "../../../actions/newMovies";
import MovieList from "../MovieList";

class NewMovies extends Component {
  componentDidMount() {
    this.props.newMoviesFetch();
  }

  render = () => renderList(this.props.newMovies);
}

const renderList = newMovies =>
  newMovies.isLoading ? (
    <p>Loading...</p>
  ) : newMovies.hasError ? (
    <p>An Error Occured</p>
  ) : newMovies.result.length < 1 ? null : (
    <MovieList list={newMovies.result} />
  );

const mapDispatchToProps = dispatch => ({
  newMoviesFetch: value => dispatch(newMovies(value))
});
const mapStateToProps = state => ({
  newMovies: state.newMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMovies);

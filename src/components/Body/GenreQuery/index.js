import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList";
import data from "../../../data/genres.json";
import byGenre from "../../../actions/byGenre";

class GenreQuery extends Component {
  componentDidMount() {
    if (this.props.match.params.genreName) {
      const genre = data.genres.find(
        genre =>
          genre.name.toLowerCase() ===
          this.props.match.params.genreName.replace(/-/g, " ")
      );
      if (genre.id) this.props.byGenreFetch(genre.id);
    }
  }

  render = () => renderList(this.props.byGenre);
}

const renderList = byGenre =>
  byGenre.isLoading ? (
    <p>Loading...</p>
  ) : byGenre.hasError ? (
    <p>An Error Occured</p>
  ) : byGenre.result.length < 1 ? null : (
    <MovieList list={byGenre.result} />
  );

const mapDispatchToProps = dispatch => ({
  byGenreFetch: value => dispatch(byGenre(value))
});
const mapStateToProps = state => ({
  byGenre: state.byGenre
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuery);

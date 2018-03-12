import React, { Component } from "react";
import MovieList from "./../MovieList";
import SearchBar from "./../SearchBar";
import style from "./Discover.scss";

export default class extends Component {
  state = {
    instaSearch: false
  };

  handleChange = e =>
    !this.state.instaSearch && e.key === "Enter"
      ? this.props.discoverFetch(e.target.value)
      : this.state.instaSearch
        ? this.props.discoverFetch(e.target.value)
        : null;

  handleInstaSearch = () =>
    this.setState({
      instaSearch: !this.state.instaSearch
    });

  render = () => (
    <div className={style.container}>
      <SearchBar
        type="text"
        className={style.searchBar}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
      />
      <button className={style.instaButton} onClick={this.handleInstaSearch}>
        Instant Search:
        {this.state.instaSearch ? (
          <span className={style.instaSearchEnabled}> Enabled</span>
        ) : (
          <span className={style.instaSearchDisabled}> Disabled</span>
        )}
      </button>
      {renderList(this.props.discover)}
    </div>
  );
}

const renderList = discover =>
  discover.isLoading ? (
    <p>Loading...</p>
  ) : discover.hasError ? (
    <p>An Error Occured</p>
  ) : discover.result.length < 1 ? null : (
    <MovieList list={discover.result} />
  );

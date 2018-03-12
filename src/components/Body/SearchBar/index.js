import React, { Component } from "react";

export default class extends Component {
  handleChange(e) {
    if (e.target.value !== "") {
      this.props.onChange(e);
    }
  }

  render = () => (
    <input
      className={this.props.className}
      name="search"
      onKeyPress={e => {
        this.handleChange(e);
      }}
    />
  );
}

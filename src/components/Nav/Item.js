import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavItem.scss";

export default class extends Component {
  state = {
    link: "",
    linkName: ""
  };
  componentDidMount() {
    if (this.props.children.props.children) {
      let link;
      link =
        this.props.children.props.children === "Discover"
          ? ""
          : this.props.children.props.children
              .replace(/\s+/g, "-")
              .toLowerCase();
      this.setState({
        link,
        linkName: this.props.children.props.children
      });
    }
  }
  render = () => (
    <NavLink
      exact
      activeClassName={style.active}
      className={`${style.link} ${style.linkHover}`}
      to={"/" + this.state.link}
    >
      {this.props.children}
    </NavLink>
  );
}

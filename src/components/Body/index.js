import React from "react";
import { Route } from "react-router-dom";
import style from "./Body.scss";

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

const checkRouteName = prop =>
  prop.url.includes("genres")
    ? prop.params.genreName
      ? `Genre: ${capitalize(prop.params.genreName)}`
      : "Genres"
    : prop.url === "/"
      ? "Discover"
      : prop.url.includes("/movie/")
        ? "Movie"
        : prop.url
            .replace(/\//g, "")
            .split("-")
            .map(word => capitalize(word))
            .join(" ");

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div className={style.container}>
        <div className={style.header}>{checkRouteName(props.match)}</div>
        <div className={style.content}>
          <Component {...props} />
        </div>
      </div>
    )}
  />
);

import React from "react";
import data from "../../../data/genres.json";
import style from "./Genres.scss";
import { Link } from "react-router-dom";

export default () => (
  <div className={style.container}>
    {data.genres.map(genre => (
      <Link
        key={genre.id}
        to={`/genres/${genre.name.replace(/\s+/g, "-").toLowerCase()}`}
        className={style.item}
      >
        {genre.name}
        <img
          className={style.icon}
          src={require(`../../../data/emoji/${genre.name
            .toLowerCase()
            .replace(" ", "-")}.png`)}
          alt={genre.name}
        />
      </Link>
    ))}
  </div>
);

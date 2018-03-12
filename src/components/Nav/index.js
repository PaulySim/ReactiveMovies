import React from "react";
import Item from "./Item";
import style from "./Nav.scss";

const Hello = currTime =>
  currTime < 12
    ? "Good Morning."
    : currTime > 12 && currTime < 18 ? "Good Afternoon." : "Good Evening.";

export default () => (
  <header className={style.header}>
    <span className={style.hello}>{Hello(new Date().getHours())}</span>
    <div className={style.container}>
      <Item className={style.item}>
        <span>Discover</span>
      </Item>
      <Item className={style.item}>
        <span>New Movies</span>
      </Item>
      <Item className={style.item}>
        <span>Genres</span>
      </Item>
      <Item className={style.item}>
        <span>My Collection</span>
      </Item>
      <Item className={style.item}>
        <span>Watch Later</span>
      </Item>
    </div>
    <span className={style.made}>Made by Paul S.</span>
  </header>
);

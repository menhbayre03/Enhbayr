import React from "react";

import css from "./style.module.css";

import Logo from "../Logo";

const Toolbar = () => (
  <header className={css.Toolbar}>
    <Logo />
    <nav>Цэс</nav>
  </header>
);

export default Toolbar;

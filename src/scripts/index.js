"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import handleNavItemClick from "./handle-nav-item-click";

document.addEventListener("DOMContentLoaded", () => {
  handleNavItemClick();
});

window.onhashchange = () => {
  handleNavItemClick();
};

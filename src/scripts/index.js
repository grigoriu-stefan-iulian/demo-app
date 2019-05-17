"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import { handleNavItemClick } from "./handle-nav-item-click";
import handleNavDisplay from "./handle-nav-display";

document.addEventListener("DOMContentLoaded", () => {
  handleNavDisplay();
  handleNavItemClick();
});

window.onhashchange = () => {
  handleNavItemClick();
};

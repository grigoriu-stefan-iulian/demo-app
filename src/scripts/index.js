"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import handleRouting from "./handle-routing";

document.addEventListener("DOMContentLoaded", () => {
  handleRouting();
});

window.onhashchange = () => {
  handleRouting();
};

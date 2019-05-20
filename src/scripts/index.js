"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import handleNavItemClick from "./handle-nav-item-click";

const handleUserName = () => {
  const user = sessionStorage.getItem("user");
  // debugger;
  const el = document.getElementById("name-container");
  el.innerHTML = "demo name";
};

document.addEventListener("DOMContentLoaded", () => {
  handleNavItemClick();
  // handleUserName();
});

window.onhashchange = () => {
  handleNavItemClick();
};

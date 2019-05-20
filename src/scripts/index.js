"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import handleRouting from "./handle-routing";
import store from "../store/store";

document.addEventListener("DOMContentLoaded", () => {
  handleRouting();
});

window.onhashchange = () => {
  handleRouting();
};

document.onstorage = () => {};

//store
/*
.addUser
.enableUser
.disableUser
.removeUser




*/

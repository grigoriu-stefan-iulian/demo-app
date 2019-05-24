"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import { RenderUsers } from "../utils/utils";
import { generateDummyUsers } from "../utils/utils";
import { router } from "../routers/routes";

window.addEventListener("DOMContentLoaded", () => {
  router[location.hash.substr(1)]();
});

window.onhashchange = () => {
  router[location.hash.substr(1)]();
};

window.addEventListener("storage", e => {
  if (e.key === "users") {
    new RenderUsers();
  }
});

//generateDummyUsers();

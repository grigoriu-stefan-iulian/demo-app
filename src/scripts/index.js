"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import { handleRouting } from "../utils/utils";
import { RenderUsers } from "../utils/utils";
import { generateDummyUsers } from "../utils/utils";

window.addEventListener("DOMContentLoaded", () => {
  handleRouting();
});

window.onhashchange = () => {
  handleRouting();
};

window.addEventListener("storage", e => {
  if (e.key === "users") {
    new RenderUsers();
  }
});

  //generateDummyUsers();

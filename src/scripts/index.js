import "../styles/index.scss";
import "normalize.css/normalize.css";
import { renderUsers } from "../utils/render-users";
import { router } from "../routers/router";
import { generateDummyUsers } from "../utils/utils";

window.addEventListener("DOMContentLoaded", () => {
  router[location.hash.substr(1)]();
});
window.addEventListener("hashchange", () => {
  router[location.hash.substr(1)]();
});
window.addEventListener("storage", e => {
  if (e.key === "users" && location.hash === "/#users") {
    renderUsers();
  }
});

// generateDummyUsers();

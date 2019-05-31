import "normalize.css/normalize.css";
import "../styles/index.scss";
import { renderUsers } from "../utils/render-users";
import { router } from "../routers/router";

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
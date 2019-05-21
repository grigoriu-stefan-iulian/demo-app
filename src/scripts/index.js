"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
import handleRouting from "./handle-routing";
import renderUsers from "../shares/render-users";
import store from "../store/store";

window.addEventListener("DOMContentLoaded", () => {
  handleRouting();
});

window.onhashchange = () => {
  handleRouting();
};

window.addEventListener("storage", e => {
  if (e.key === "users") {
    renderUsers();
  }
});

//Dummy Users
const users = [];
for (let i = 0; i < 25; i++) {
  users.push({
    fName: "Stefan",
    lName: "Grigoriu",
    email: `stefan${i}@gmail.com`,
    password: 123,
    role: "Regular",
    enabled: false
  });
}

//store.setStore(users);

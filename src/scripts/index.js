"use strict";
import "../styles/index.scss";
import "normalize.css/normalize.css";
//import { pasuser } from './form-validation';
import { routes } from "../routers/routes";

document.addEventListener("DOMContentLoaded", () => {
 routes[window.location.pathname]();
});

//let page = routes[window.location.hash];
//page.mount();

window.onhashchange = () => {
  // page.unmount();
  //page =
  routes[window.location.hash || window.location.pathname]();
  // page.mount();
};

/*
let onNavItemClick = (pathName) => {
    window.history.pushState(
      {}, 
      pathName,
      window.location.origin + pathName
    );
    contentDiv.innerHTML = routes[pathName];
  };

  window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
  };

*/

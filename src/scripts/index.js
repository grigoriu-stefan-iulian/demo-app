'use strict';

import '../styles/index.scss';
import 'normalize.css/normalize.css';
//import { pasuser } from './form-validation';
import { Routes } from '../routers/routes';

const contentDiv = document.getElementById('app');
contentDiv.innerHTML = routes[window.location.pathname];

let page = new Routes[window.location.hash];
page.mount();

window.onhashchange = () => {
 page.unmount();
 page = new Routes[window.location.hash];
 page.mount();
}

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
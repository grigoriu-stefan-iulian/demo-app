import store from "../store/store";

//a component that gives access to certain routes depending on user priviledge
/*
if adminIsAuthenticated -> give access to users page
if !isAuthenticated -> redirect to login // access to login and register
if isAuthenticated -> routes = {}

*/

// use proxies on routes ?
export const Header = () => {
  try {
    const user = store.getSession();
    user.role === "admin"
      ? console.log("Admin Header with access to Dashboard, Users and Logout")
      : console.log("Regular user Header with access to Dashboard and Logout");
  } catch (err) {
    console.log("Guest Header with Login and Register links");
  }
};

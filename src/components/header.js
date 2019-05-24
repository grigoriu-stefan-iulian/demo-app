import store from "../store/store";

//a component that renders routes depending on user priviledge
/*
if adminIsAuthenticated -> render users page
if !isAuthenticated -> redirect to login // access to login and register
if isAuthenticated -> routes = {}

*/

export const Header = () => {
  try {
    const user = store.getSession("user");
    user.role === "admin"
      ? console.log("Admin Header with access to Dashboard, Users and Logout")
      : console.log("Regular user Header with access to Dashboard and Logout");
  } catch (err) {
    console.log("Guest Header with Login and Register links");
  }
};

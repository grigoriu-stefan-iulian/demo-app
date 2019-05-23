import RouteBase from "./route-base";
import loginHtml from "../pages/login.html";
import logoutHtml from "../pages/logout.html";
import registerHtml from "../pages/register.html";
import dashboardHtml from "../pages/dashboard.html";
import usersHtml from "../pages/users.html";
import LoginPage from "../components/login.page";
import RegisterPage from "../components/register.page";
import Dashboard from "../components/dashboard.page";
import LogoutPage from "../components/logout.page";
import notfoundHtml from "../pages/notfound.html";
import UsersPage from "../components/users.page";
import store from "../store/store";

const routes = {
  login() {
    new LoginPage(loginHtml);
  },
  logout() {
    new LogoutPage(logoutHtml);
  },
  register() {
    new RegisterPage(registerHtml);
  },
  dashboard() {
    new Dashboard(dashboardHtml);
  },
  users() {
    new UsersPage(usersHtml);
  },
  notfound() {
    new RouteBase(notfoundHtml);
  }
};

const proxyHandler = {
  get(routes, prop) {
    const session = store.getSession();
    try {
      if (session.role === "admin") {
        return routes[prop];
      } else if (session.role === "regular") {
        return prop === "dashboard" || prop === "logout"
          ? routes[prop]
          : routes.dashboard;
      }
    } catch (err) {
      return prop === "login" || prop === "register"
        ? routes[prop]
        : routes.dashboard;
    }
  }
};

const proxyRoutes = new Proxy(routes, proxyHandler);

export default proxyRoutes;

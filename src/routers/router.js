import loginHtml from "../pages/login.html";
import logoutHtml from "../pages/logout.html";
import registerHtml from "../pages/register.html";
import dashboardHtml from "../pages/dashboard.html";
import usersHtml from "../pages/users.html";
import LoginPage from "../components/login.page";
import RegisterPage from "../components/register.page";
import Dashboard from "../components/dashboard.page";
import LogoutPage from "../components/logout.page";
import UsersPage from "../components/users.page";
import { store } from "../store/store";

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
  }
};

const proxyHandler = {
  get(routes, prop) {
    const session = store.getSession("user");
    if (session === null) {
      return prop === "register" ? routes[prop] : routes.login;
    }
    if (session.role === "admin") {
      return prop === "users" || prop === "logout"
        ? routes[prop]
        : routes.dashboard;
    }
    if (session.role === "regular") {
      return prop === "logout" ? routes[prop] : routes.dashboard;
    }
  }
};

export const router = new Proxy(routes, proxyHandler);

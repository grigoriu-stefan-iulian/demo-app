import RouteBase from "./route-base";
import loginHtml from "../pages/login.html";
import homepageHtml from "../pages/homepage.html";
import logoutHtml from "../pages/logout.html";
import registerHtml from "../pages/register.html";
import dashboardHtml from "../pages/dashboard.html";
import usersHtml from "../pages/users.html";

export const routes = {
  "/"() {
    new RouteBase(homepageHtml);
  },
  "#login"() {
    new RouteBase(loginHtml);
  },
  "#logout"() {
    new RouteBase(logoutHtml);
  },
  "#register"() {
    new RouteBase(registerHtml);
  },
  "#dashboard"() {
    new RouteBase(dashboardHtml);
  },
  "#users"() {
    new RouteBase(usersHtml);
  }
};

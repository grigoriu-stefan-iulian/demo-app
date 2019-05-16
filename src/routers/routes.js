//import { LoginPage } from "../components/login.page";
//import { HomePage } from "../components/home.page";
import RouteBase from "./route-base";
import loginHtml from "html-loader!./login.html";
import homepageHtml from "html-loader!./homepage.html";
import logoutHtml from "html-loader!./logout.html";
import registerHtml from "html-loader!./register.html";
import dashboardHtml from "html-loader!./dashboard.html";
import usersHtml from "html-loader!./users.html";

export const routes = {
  // '/': homePage,
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
  },
};

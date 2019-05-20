import RouteBase from "./route-base";
import loginHtml from "../pages/login.html";
import logoutHtml from "../pages/logout.html";
import registerHtml from "../pages/register.html";
import dashboardHtml from "../pages/dashboard.html";
import usersHtml from "../pages/users.html";
import LoginPage from "../components/login.page";
import RegisterPage from "../components/register.page";
import Dashboard from "../components/dashboard";
import LogoutPage from "../components/logout.page";

const routes = {
  "#login"() {
    new LoginPage(loginHtml);
  },
  "#logout"() {
    new LogoutPage(logoutHtml);
  },
  "#register"() {
    new RegisterPage(registerHtml);
  },
  "#dashboard"() {
    new Dashboard(dashboardHtml);
  },
  "#users"() {
    new RouteBase(usersHtml);
  }
};

export default routes;

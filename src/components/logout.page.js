import RouteBase from "../routers/route-base";
import Events from "./events";

class LogoutPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.events = new Events();
    this.events.add({
      target: "logout-button",
      handler: this.handleLogout,
      type: "click"
    });
  }
  handleLogout() {
    sessionStorage.removeItem("user");
    location.hash = "#dashboard";
  }
}

export default LogoutPage;

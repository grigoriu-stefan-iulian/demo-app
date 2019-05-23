import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import store from "../store/store";

export default class LogoutPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    addEvent({
      target: "logout-button",
      handler: this.handleLogout,
      type: "click"
    });
  }
  handleLogout() {
    store.removeSession();
    location.hash = "#dashboard";
  }
}
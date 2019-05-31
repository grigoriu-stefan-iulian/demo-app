import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import { store } from "../store/store";
import { handlePageChange } from "../utils/handle-page-change";

export default class LogoutPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleLogout = this.handleLogout.bind(this);
    addEvent({
      target: "logout-button",
      handler: this.handleLogout,
      type: "click"
    });
  }
  handleLogout() {
    store.removeSession("user");
    handlePageChange({
      type: "click",
      target: "logout-button",
      handler: this.handleLogout,
      route: "#login"
    });
  }
}

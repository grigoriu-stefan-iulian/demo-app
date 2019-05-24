import RouteBase from "../routers/route-base";
import store from "../store/store";

export default class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.user = store.getSession("user");
    this.handleUserName(this.user, "name-container");
  }
  handleUserName(user, nameContainer) {
    try {
      document.getElementById(nameContainer).innerHTML = user.fName;
    } catch (err) {
      console.log("Error:", err);
    }
  }
}

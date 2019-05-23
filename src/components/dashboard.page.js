import RouteBase from "../routers/route-base";
import store from "../store/store";

export default class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleUserName();
  }
  handleUserName() {
    const user = store.getSession(),
      userName = user === null ? "Visitor" : user.fName;
    document.getElementById("name-container").innerHTML = userName;
  }
}

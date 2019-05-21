import RouteBase from "../routers/route-base";
import store from "../store/store";

class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleUserName();
  }
  handleUserName() {
    const user = store.getSession();
    const userName = user === null ? "Visitor" : user.fName;
    document.getElementById("name-container").innerHTML = userName;
  }
}

export default Dashboard;

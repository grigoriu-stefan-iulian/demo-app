import RouteBase from "../routers/route-base";

class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleUserName();
  }
  handleUserName() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    //debugger;
    const userName = user === null ? "Visitor" : user.fName;
    document.getElementById("name-container").innerHTML = userName;
  }
}

export default Dashboard;

import RouteBase from "../routers/route-base";
import { store } from "../store/store";

export default class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.user = store.getSession("user");
    document.getElementById("name-container").innerHTML = this.user.fName;
    this.onAdminUsers();
  }
  onAdminUsers() {
    if (this.user.role === "admin") {
      this.createUsersLink();
    }
  }
  createUsersLink() {
    const links = document.getElementById("links"),
      anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", "/#users");
    anchorEl.classList.add("button--link");
    anchorEl.innerHTML = "Users";
    links.appendChild(anchorEl);
  }
}

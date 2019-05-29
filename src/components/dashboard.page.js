import RouteBase from "../routers/route-base";
import { store } from "../store/store";

export default class Dashboard extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.user = store.getSession("user");
    this.nameContainer = document.getElementById("name-container");
    this.nameContainer.innerHTML = this.user.fName;
    this.checkIfAdmin();
  }
  checkIfAdmin() {
    if (this.user.role === "admin") {
      this.createUsersLink();
    }
  }
  createUsersLink() {
    const links = document.getElementById("links"),
      anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", "/#users");
    anchorEl.classList.add("button", "button--link");
    anchorEl.innerHTML = "Users";
    links.appendChild(anchorEl);
  }
}

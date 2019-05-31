import admins from "../data/admins.json";
import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import { store } from "../store/store";
import { handlePageChange } from "../utils/handle-page-change";

export default class LoginPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.users = [...admins, ...store.getStore("users")];
    this.errorEl = document.getElementById("error-message");
    this.user = {};
    this.handleLogin = this.handleLogin.bind(this);
    addEvent({
      type: "submit",
      target: "login-submit",
      handler: this.handleLogin
    });
  }
  handleLogin(e) {
    e.preventDefault();
    const loginEmail = e.target[0].value,
      loginPassword = e.target[1].value;
    this.getUser(this.users, loginEmail, loginPassword);
    this.handleSession(this.user);
  }
  getUser(users, email, password) {
    this.user = users.find(
      user => user.email === email && user.password === password
    );
  }
  handleSession(user) {
    user === undefined
      ? (this.errorEl.innerHTML = "Wrong Email or Password")
      : user.enabled === false
        ? (this.errorEl.innerHTML = "Your account is not enabled yet.")
        : this.setLoginSession(user);
  }
  setLoginSession(user) {
    store.setSession("user", user);
    handlePageChange({
      type: "submit",
      target: "login-submit",
      handler: this.handleLogin,
      route: "#dashboard"
    });
  }
}

import admins from "../data/admins.json";
import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import store from "../store/store";

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
    this.validateUser(this.user);
  }
  getUser(users, email, password) {
    this.user = users.find(
      user => user.email === email && user.password === password
    );
  }
  validateUser(user) {
    user === undefined
      ? (this.errorEl.innerHTML = "Wrong Email or Password")
      : user.enabled === false
      ? (this.errorEl.innerHTML = "Your account is not enabled yet.")
      : this.setLoginSession(user);
  }
  setLoginSession(user) {
    store.setSession("user", user);
    location.hash = "#dashboard";
  }
}

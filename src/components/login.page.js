import admins from "../data/admins.json";
import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import store from "../store/store";

export default class LoginPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.users = [...admins, ...store.getStore()];
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
    this.getUser(loginEmail, loginPassword);
    this.validateUser();
  }
  getUser(email, password) {
    this.user = this.users.find(
      el => el.email === email && el.password === password
    );
  }
  validateUser() {
    this.user === undefined
      ? (this.errorEl.innerHTML = "Wrong Email or Password")
      : this.user.enabled === false
      ? (this.errorEl.innerHTML = "Your account is not enabled yet.")
      : this.setLoginSession();
  }
  setLoginSession() {
    store.setSession(this.user);
    location.hash = "#dashboard";
  }
}

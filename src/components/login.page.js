import RouteBase from "../routers/route-base";
import Events from "./events";
import store from "../store/store";

class LoginPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.events = new Events();
    this.events.add({
      type: "submit",
      target: "login-submit",
      handler: this.handleLogin
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const errorEl = document.getElementById("error-message");
    const loginEmail = e.target[0].value;
    const loginPassword = e.target[1].value;
    const users = store.getStore();
    const user = users.find(
      el => el.email === loginEmail && el.password === loginPassword
    );

    user === undefined
      ? (errorEl.innerHTML = "Wrong Email or Password")
      : user.enabled === false
      ? (errorEl.innerHTML = "Your account is not enabled yet.")
      : (() => {
          store.setSession(user);
          location.hash = "#dashboard";
        })();
  }
}

export default LoginPage;

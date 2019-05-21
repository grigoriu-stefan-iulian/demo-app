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
    const loginEmail = e.target[0].value;
    const loginPassword = e.target[1].value;
    const users = store.getStore();
    const user = users.find(
      el =>
        el.email === loginEmail && el.password === loginPassword && el.enabled
    );
    user === undefined
      ? (document.getElementById("error-message").innerHTML =
          "Wrong Email or Password")
      : (() => {
          store.setSession(user);
          location.hash = "#dashboard";
        })();
  }
}

export default LoginPage;

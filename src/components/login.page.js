import RouteBase from "../routers/route-base";
import Events from "./events";

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
    // check if email and pasword match a user in localStorage
    //  if yes, push the user data to sessionStorage
    //  if not, fill a span with error message
    const loginEmail = e.target[0].value;
    const loginPassword = e.target[1].value;
    const store = JSON.parse(localStorage.getItem("users")) || [];
    const user = store.filter(
      el => el.email === loginEmail && el.password === loginPassword
    );
    user[0] === undefined
      ? (document.getElementById("error-message").innerHTML =
          "Wrong Email or Password")
      : sessionStorage.setItem("user", JSON.stringify(user[0]));
  }
}

export default LoginPage;

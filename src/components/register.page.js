import RouteBase from "../routers/route-base";
import Events from "./events";
import store from "../store/store";

class RegisterPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.events = new Events();
    this.events.add({
      type: "submit",
      target: "register-form",
      handler: this.storeUsers
    });
  }

  storeUsers(e) {
    e.preventDefault();
    const users = store.getStore();
    const errorEl = document.getElementById("registration-error");
    const user = {
      fName: e.target[0].value,
      lName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      role: "Regular",
      enabled: false
    };
    users.find(el => el.email === user.email) === undefined
      ? (() => {
          users.push(user);
          errorEl.innerHTML = "";
          store.setStore(users);
        })()
      : (errorEl.innerHTML = "This email is already in use.");
  }
}

export default RegisterPage;

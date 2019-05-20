import RouteBase from "../routers/route-base";
import Events from "./events";

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
    let store = JSON.parse(localStorage.getItem("users")) || [];
    const user = {
      fName: e.target[0].value,
      lName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      enabled: false
    };
    store.push(user);
    localStorage.setItem("users", JSON.stringify(store));
  }
}

export default RegisterPage;

import RouteBase from "../routers/route-base";
import { addEvent } from "../utils/utils";
import store from "../store/store";

export default class RegisterPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.users = store.getStore();
    this.errorEl = document.getElementById("registration-error");
    this.storeUsers = this.storeUsers.bind(this);
    addEvent({
      type: "submit",
      target: "register-form",
      handler: this.storeUsers
    });
  }
  storeUsers(e) {
    e.preventDefault();
    const user = {
      fName: e.target[0].value,
      lName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      role: "Regular",
      enabled: false
    };
    this.emailValidation(user);
  }
  emailValidation(user) {
    this.users.find(el => el.email === user.email) === undefined
      ? this.userRegistration(user)
      : (this.errorEl.innerHTML = "This email is already in use.");
  }
  userRegistration(user) {
    this.users.push(user);
    this.errorEl.innerHTML = "";
    store.setStore(this.users);
  }
}

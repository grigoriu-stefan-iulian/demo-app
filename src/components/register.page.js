import RouteBase from "../routers/route-base";
import { addEvent, removeEvent } from "../utils/utils";
import { store } from "../store/store";

export default class RegisterPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.users = store.getStore("users");
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
      role: "regular",
      enabled: false
    };
    this.handleRegistration(this.users, user);
  }
  handleRegistration(users, user) {
    users.find(el => el.email === user.email) === undefined
      ? this.registerUser(users, user)
      : (this.errorEl.innerHTML = "This email is already in use.");
  }
  registerUser(users, user) {
    users.unshift(user);
    this.errorEl.innerHTML = "";
    store.setStore("users", users);
    removeEvent({
      type: "submit",
      target: "register-form",
      handler: this.storeUsers
    });
    location.hash = "/#login";
  }
}

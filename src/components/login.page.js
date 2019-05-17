import RouteBase from "../routers/route-base";
import Events from "./events";

class LoginPage extends RouteBase {
  constructor(htmlToRender) {
    super(htmlToRender);
    this.events = new Events();
    this.events.add({
      type: "click",
      target: "alert-button",
      handler: this.someCoolEventCallback
    });
  }

  someCoolEventCallback() {
    alert("Working Event");
  }
}

export default LoginPage;

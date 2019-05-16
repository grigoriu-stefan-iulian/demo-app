//require('login.html');
//import loginHtml from "html-loader!./login.html";
import RouteBase from "../routers/route-base";

export class LoginPage extends RouteBase {
  constructor() {
    super();
    //super.mount(loginHtml);
    // events = new Events();

    // this.someCoolEventCallback = this.someCoolEventCallback.bind(this);
  }
  /*
    this.events.add({
      target: element,
      type: "click",
      handlers: this.someCoolEventCallback
    });
    */
  // add events
  //}

  // unmount() {
  //   this.events.remove();
  //  // remove events;
  // }

  someCoolEventCallback() {
    this.property = 1;
  }
}

import * as loginHtml from './login.html';

export class LoginPage extends RouteBase {
  constructor() {
    super();
    
    // events = new Events();

    this.someCoolEventCallback = this.someCoolEventCallback.bind(this);
  }

  mount() {
    super.mount(loginHtml);

    this.events.add({
      target: element,
      type: 'click',
      handlers: this.someCoolEventCallback
    })
    // add events
  }

  // unmount() {
  //   this.events.remove();
  //  // remove events;
  // }

  someCoolEventCallback() {
    this.property = 1;
  }
}
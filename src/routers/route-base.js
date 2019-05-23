import { Header } from "../components/header";

export default class RouteBase {
  constructor(htmlComponent) {
    this.container = document.getElementById("app");
    this.mount(htmlComponent);
    new Header();
  }
  mount(htmlComponent) {
    this.container.innerHTML = htmlComponent;
  }
  unmount() {
    this.container.innerHTML = "";
  }
}

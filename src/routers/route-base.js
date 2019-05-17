export default class RouteBase {
  constructor(htmlComponent) {
    this.container = document.getElementById("app");
    this.mount(htmlComponent);
  }
  mount(htmlComponent) {
    this.container.innerHTML = htmlComponent;
  }
  unmount() {
    this.container.innerHTML = "";
  }
}

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

//component unmount -> will also remove event listeners
/*

onhashchange remove event listeners from the current hash then move to the next hash 
- I can't get a list of events
- Older version of browsers have memory leaks - they don't clean up the garbage data

depending on which hash I am, run a method that removes the eventListeners

if (location.hash === "/#users") {
  unmountEvents({
    target:
    type:
    handler:
  })
}
have a method that gets 

*/

class Events {
  add({ type, target, handler } = obj) {
    const targetElement = document.getElementById(target);
    targetElement.addEventListener(type, handler);
  }
}

export default Events;

class CaptureEvents {
  constructor() {
    this.events = [];
  }
  collectEvent(target, type, handler) {
    this.events.push({
      target,
      type,
      handler
    });
  }
  removeEvents() {
    this.events.forEach(event => {
      event.target.removeEventListener(event.type, event.handler);
    });
  }
}

export const handleEvents = {
  events: [],
  collectEvent(target, type, handler) {
    this.events.push({
      target,
      type,
      handler
    });
  },
  removeEvents() {
    this.events.forEach(({ target, type, handler } = event) => {
      target.removeEventListener(type, handler);
    });
  }
};

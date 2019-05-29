export const captureEvents = {
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
// clasa/engine in care sa adaug event-urile folosite pe pagina mea si cand parasesc pagina, dau remove la toate eventurile
// un aray the obiecte {type: "", handler: "", target: ""}

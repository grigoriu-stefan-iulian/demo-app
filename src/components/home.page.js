//() => location.push('/login')

export class HomePage {
  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = HomePage.markup();
  }

  static markup() {
    return `
        <h1>This is homepage</h1>
      `;
  }
}


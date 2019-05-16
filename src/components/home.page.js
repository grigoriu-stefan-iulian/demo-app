//() => location.push('/login')

// export const homePage = `<div>this is hompage. Working</div>
// <button onClick=''>Login</button>
// `;

export class HomePage {
    init(container) {
      this.container = container;
      this.render();
    }
  
    render() {
      this.container.innerHTML = HomePage.markup(this);
    }
  
    static markup({}) {
      return `
        <h1>Hello, World!</h1>
      `;
    }
  
    constructor(container) {
      // The constructor should only contain the boiler plate code for finding or creating the reference.
      if (typeof container.dataset.ref === 'undefined') {
        this.ref = Math.random();
        HomePage.refs[this.ref] = this;
        container.dataset.ref = this.ref;
        this.init(container);
      } else {
        // If this element has already been instantiated, use the existing reference.
        return HomePage.refs[container.dataset.ref];
      }
    }
  }

  HomePage.refs = {};

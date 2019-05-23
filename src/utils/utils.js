import store from "../store/store";
import routes from "../routers/routes";

export class RenderUsers {
  constructor() {
    this.users = store.getStore();
    this.table = document.getElementById("users-table");
    this.render();
  }
  render() {
    this.table.innerHTML = "";
    this.users.forEach((user, j) => {
      let tableRow = document.createElement("tr");
      Object.values(user).forEach((prop, i) => {
        if (i === 5) {
          const userState = prop === false ? "Enable" : "Disable",
            enableButton = this.createButton(userState, "enable-button", () => {
              this.enableUser(user);
            }),
            deleteButton = this.createButton("Delete", "delete-button", () => {
              this.deleteUser(this.users, j);
            });
          tableRow.appendChild(enableButton);
          tableRow.appendChild(deleteButton);
        } else {
          const tableDataEl = this.createTableData(prop);
          tableRow.appendChild(tableDataEl);
        }
      });
      this.table.appendChild(tableRow);
    });
  }
  createButton(value, classes, handler) {
    const button = document.createElement("button"),
      tableDataEl = document.createElement("td");
    button.innerHTML = value;
    button.classList.add("button", classes);
    button.addEventListener("click", handler);
    tableDataEl.appendChild(button);
    return tableDataEl;
  }
  createTableData(el) {
    const tableData = document.createElement("td");
    tableData.innerHTML = el;
    return tableData;
  }
  enableUser(user) {
    user.enabled = !user.enabled;
    this.updateStore(this.users);
  }
  deleteUser(users, index) {
    users.splice(index, 1);
    this.updateStore(this.users);
  }
  updateStore(users) {
    store.setStore(users);
    this.render();
  }
}

export const handleRouting = () => {
  try {
    location.hash === ""
      ? routes.dashboard()
      : routes[location.hash.substr(1)]();
  } catch (err) {
    routes.notfound();
  }
};

export const generateDummyUsers = () => {
  const users = [];
  for (let i = 0; i < 25; i++) {
    users.push({
      fName: `User${i}`,
      lName: "Doe",
      email: `stefan${i}@gmail.com`,
      password: "123",
      role: "Regular",
      enabled: false
    });
  }
  store.setStore(users);
};

export const addEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.addEventListener(type, handler);
};

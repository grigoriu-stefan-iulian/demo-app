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
          const buttonContent = prop === false ? "Enable" : "Disable",
            enableButton = this.createButton(
              buttonContent,
              "enable-button",
              () => {
                this.enableUser(this.users, user);
              }
            ),
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
  createButton(content, classes, eventHandler) {
    const button = document.createElement("button"),
      tableDataEl = document.createElement("td");
    button.innerHTML = content;
    button.classList.add("button", classes);
    button.addEventListener("click", eventHandler);
    tableDataEl.appendChild(button);
    return tableDataEl;
  }
  createTableData(el) {
    const tableData = document.createElement("td");
    tableData.innerHTML = el;
    return tableData;
  }
  enableUser(users, user) {
    user.enabled = !user.enabled;
    this.updateStore(users);
  }
  deleteUser(users, index) {
    users.splice(index, 1);
    this.updateStore(users);
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
      role: "regular",
      enabled: false
    });
  }
  store.setStore(users);
};

export const addEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.addEventListener(type, handler);
};

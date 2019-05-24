import store from "../store/store";
import routes from "../routers/routes";

export class RenderUsers {
  constructor() {
    this.users = store.getStore("users");
    this.table = document.getElementById("users-table");
    this.render(this.users);
  }
  render(users) {
    this.table.innerHTML = "";
    users.forEach((user, i) => {
      const tableRow = document.createElement("tr");
      Object.keys(user).forEach(prop => {
        if (prop === "enabled") {
          const buttonContent = user[prop] === false ? "Enable" : "Disable",
            enableButton = this.createButton(
              buttonContent,
              "enable-button",
              () => {
                this.enableUser(users, user, prop);
              }
            ),
            deleteButton = this.createButton("Delete", "delete-button", () => {
              this.deleteUser(users, i);
            });
          tableRow.appendChild(enableButton);
          tableRow.appendChild(deleteButton);
        } else {
          const tableDataEl = this.createTableData(user[prop]);
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
  enableUser(users, user, property) {
    user[property] = !user[property];
    this.updateStore("users", users);
  }
  deleteUser(users, index) {
    users.splice(index, 1);
    this.updateStore("users", users);
  }
  updateStore(storeToUpdate, updates) {
    store.setStore(storeToUpdate, updates);
    this.render(updates);
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
  store.setStore("users", users);
};

export const addEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.addEventListener(type, handler);
};

export const removeEvent = () => {
  return;
};

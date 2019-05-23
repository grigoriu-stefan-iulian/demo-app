import store from "../store/store";
import routes from "../routers/routes";

export class RenderUsers {
  constructor() {
    this.users = store.getStore();
    this.table = document.getElementById("users-table");
    //this.render = this.render.bind(this);
    
    this.render();
  }

  render() {
    console.log(this.table);
    this.table.innerHTML = "";

    this.users.forEach((user, j) => {
      let tableRow = document.createElement("tr");
      Object.values(user).forEach((el, i) => {
        if (i === 5) {
          const enableButton = this.createEnableButton(user, el, j);
          tableRow.appendChild(enableButton);
          const deleteButton = this.createDeleteButton(j);
          tableRow.appendChild(deleteButton);
        } else {
          let tableData = document.createElement("td");
          tableData.innerHTML = el;
          tableRow.appendChild(tableData);
        }
      });
      this.table.appendChild(tableRow);
    });
  }
  createEnableButton(user, value, index) {
    // debugger;
    const enableButton = document.createElement("button");
    enableButton.innerHTML = value === false ? "Enable" : "Disable";
    console.log(value);
    enableButton.classList.add("enable-button");

    // addEvent({
    //   type: "click",
    //   target: "enable-button",
    //   handler: this.enableUser(user, index)
    // });
    let tableData = document.createElement("td");
    tableData.appendChild(enableButton);
    return tableData;
  }
  createDeleteButton(index) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    // addEvent({
    //   type: "click",
    //   target: "delete-button",
    //   handler() {
    //     this.deleteUser(index);
    //   }
    // });

    let tableData2 = document.createElement("td");
    tableData2.appendChild(deleteButton);
    return tableData2;
  }
  enableUser(user, index) {
    user.enabled = !user.enabled;
    this.users[index] = user;
    enableButton.innerHTML = user.enabled === false ? "Enable" : "Disable";
    store.setStore(this.users);
  }
  deleteUser(index) {
    this.users.splice(index, 1);
    store.setStore(this.users);
    new RenderUsers();
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

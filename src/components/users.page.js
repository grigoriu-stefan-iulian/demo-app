import RouteBase from "../routers/route-base";
import store from "../store/store";

class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleUsersData();
  }
  handleUsersData() {
    const users = store.getStore();
    const table = document.getElementById("users-table");
    users.forEach((user, j) => {
      let tableRow = document.createElement("tr");
      Object.values(user).forEach((el, i) => {
        if (i === 5) {
          const enableButton = document.createElement("button");
          enableButton.innerHTML = el === false ? "Enable" : "Disable";
          enableButton.addEventListener("click", () => {
            user.enabled = !user.enabled;
            users[j] = user;
            enableButton.innerHTML =
              user.enabled === false ? "Enable" : "Disable";
            store.setStore(users);
          });

          let tableData = document.createElement("td");
          tableData.appendChild(enableButton);
          tableRow.appendChild(tableData);
        } else {
          let tableData = document.createElement("td");
          tableData.innerHTML = el;
          tableRow.appendChild(tableData);
        }
      });
      table.appendChild(tableRow);
    });
  }
  handleUserStatus() {}
}

export default UsersPage;

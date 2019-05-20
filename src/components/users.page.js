import RouteBase from "../routers/route-base";

class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    this.handleUsersData();
  }
  handleUsersData() {
    const users = JSON.parse(localStorage.getItem("users"));
    const table = document.getElementById("users-table");
    users.forEach(user => {
      let tableRow = document.createElement("tr");
      Object.values(user).forEach(el => {
        let tableData = document.createElement("td");
        console.log(el);
        tableData.innerHTML = el;
        tableRow.appendChild(tableData);
      });
      table.appendChild(tableRow);
    });
  }
}

export default UsersPage;

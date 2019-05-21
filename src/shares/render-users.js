import store from "../store/store";

const renderUsers = () => {
  const users = store.getStore();
  const table = document.getElementById("users-table");
  table.innerHTML = "";
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

        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Delete";
        removeButton.addEventListener("click", () => {
          users.splice(j, 1);
          store.setStore(users);
          renderUsers();
        });
        let tableData2 = document.createElement("td");
        tableData2.appendChild(removeButton);
        tableRow.appendChild(tableData2);
      } else {
        let tableData = document.createElement("td");
        tableData.innerHTML = el;
        tableRow.appendChild(tableData);
      }
    });
    table.appendChild(tableRow);
  });
};

const switchButton = () => {};
export default renderUsers;

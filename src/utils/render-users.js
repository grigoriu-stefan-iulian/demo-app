import { store } from "../store/store";
import { addEvent } from "./utils";

export const renderUsers = () => {
  addEvent({
    target: "dashboard-button",
    handler: handleRemoveEvents,
    type: "click"
  });
  const users = store.getStore("users"),
    table = document.getElementById("users-table");
  table.innerHTML = "";
  users.forEach((user, i) => {
    const tableRow = document.createElement("tr");
    Object.keys(user).forEach(prop => {
      if (prop === "enabled") {
        const buttonContent = user[prop] === false ? "Enable" : "Disable",
          enableButton = createButton(
            buttonContent,
            "enable-button",
            enableUser(users, user, prop)
          ),
          deleteButton = createButton(
            "Delete",
            "delete-button",
            deleteUser(users, i)
          );
        tableRow.appendChild(enableButton);
        tableRow.appendChild(deleteButton);
      } else {
        const tableDataEl = createTableData(user[prop]);
        tableRow.appendChild(tableDataEl);
      }
    });
    table.appendChild(tableRow);
  });
};

const createButton = (content, classes, eventHandler) => {
  const button = document.createElement("button"),
    tableDataEl = createTableData("");
  button.innerHTML = content;
  button.classList.add("button", classes);
  button.addEventListener("click", eventHandler);
  tableDataEl.appendChild(button);
  return tableDataEl;
};

const createTableData = el => {
  const tableData = document.createElement("td");
  tableData.innerHTML = el;
  return tableData;
};

const enableUser = (users, user, property) => {
  return () => {
    user[property] = !user[property];
    updateStore("users", users);
  };
};

const deleteUser = (users, index) => {
  return () => {
    users.splice(index, 1);
    updateStore("users", users);
  };
};

const updateStore = (storeToUpdate, updates) => {
  store.setStore(storeToUpdate, updates);
  renderUsers();
};

const handleRemoveEvents = () => {
  const enableButtons = document.getElementsByClassName("enable-button"),
    deleteButtons = document.getElementsByClassName("delete-button");
  enableButtons.forEach(button => {
    button.removeEventListener("click", enableUser);
  });
  deleteButtons.forEach(button => {
    button.removeEventListener("click", deleteUser);
  });
};

// clasa in care sa adaug event-urile folosite pe pagina mea si cand parasesc pagina, dau remove la toate eventurile
// un aray the obiecte {type: "", handler: "", target: ""}

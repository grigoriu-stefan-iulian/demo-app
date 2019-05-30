import { store } from "../store/store";
import { addEvent } from "./utils";
import { handleEvents } from "./handle-events";

export const renderUsers = () => {
  const users = store.getStore("users"),
    table = document.getElementById("users-table");
  handleEvents.events = [];
  table.innerHTML = "";
  users.forEach((user, i) => {
    const tableRow = document.createElement("tr");
    Object.keys(user).forEach(prop => {
      if (prop === "enabled") {
        const enableButtonContent = user[prop] === false ? "Enable" : "Disable",
          enableButton = createButton(
            enableButtonContent,
            enableUser(users, user, prop)
          ),
          deleteButton = createButton("Delete", deleteUser(users, i));
        tableRow.appendChild(enableButton);
        tableRow.appendChild(deleteButton);
      } else {
        const tableDataEl = createTableData(user[prop]);
        tableRow.appendChild(tableDataEl);
      }
    });
    table.appendChild(tableRow);
  });
  addEvent({
    target: "dashboard-button",
    handler: () => handleEvents.removeEvents(),
    type: "click"
  });
};

const createButton = (content, eventHandler) => {
  const button = document.createElement("button"),
    tableDataEl = createTableData("");
  button.innerHTML = content;
  button.classList.add("button", "button--users", content);
  button.addEventListener("click", eventHandler, false);
  handleEvents.collectEvent(button, "click", eventHandler);
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

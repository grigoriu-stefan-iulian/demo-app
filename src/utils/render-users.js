import { store } from "../store/store";
import { addEvent } from "./utils";
import CaptureEvents from "./capture-events";
import { captureEvents } from "./capture-events";

//const capture = new CaptureEvents();

export const renderUsers = () => {
  const users = store.getStore("users"),
    table = document.getElementById("users-table");
  captureEvents.events = [];
  table.innerHTML = "";
  users.forEach((user, i) => {
    const tableRow = document.createElement("tr");
    Object.keys(user).forEach(prop => {
      if (prop === "enabled") {
        const buttonContent = user[prop] === false ? "Enable" : "Disable",
          enableButton = createButton(
            buttonContent,
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
    handler: () => captureEvents.removeEvents(),
    type: "click"
  });
};

const createButton = (content, eventHandler) => {
  const button = document.createElement("button"),
    tableDataEl = createTableData("");
  button.innerHTML = content;
  button.classList.add("button", "button--users", content);
  button.addEventListener("click", eventHandler, false);
  captureEvents.collectEvent(button, "click", eventHandler);
  console.log(captureEvents.events);
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
    button.removeEventListener("click", enableUser, false);
  });
  deleteButtons.forEach(button => {
    button.removeEventListener("click", deleteUser, false);
  });
};

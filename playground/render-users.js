// export class RenderUsers {
//   constructor() {
//     this.users = store.getStore("users");
//     this.table = document.getElementById("users-table");
//     this.render(this.users);
//   }
//   render(users) {
//     this.table.innerHTML = "";
//     users.forEach((user, i) => {
//       const tableRow = document.createElement("tr");
//       Object.keys(user).forEach(prop => {
//         if (prop === "enabled") {
//           const buttonContent = user[prop] === false ? "Enable" : "Disable",
//             enableButton = this.createButton(
//               buttonContent,
//               "enable-button",
//               () => {
//                 this.enableUser(users, user, prop);
//               }
//             ),
//             deleteButton = this.createButton("Delete", "delete-button", () => {
//               this.deleteUser(users, i);
//             });
//           tableRow.appendChild(enableButton);
//           tableRow.appendChild(deleteButton);
//         } else {
//           const tableDataEl = this.createTableData(user[prop]);
//           tableRow.appendChild(tableDataEl);
//         }
//       });
//       this.table.appendChild(tableRow);
//     });
//   }
//   createButton(content, classes, eventHandler) {
//     const button = document.createElement("button"),
//       tableDataEl = this.createTableData("");
//     button.innerHTML = content;
//     button.classList.add("button", classes);
//     button.addEventListener("click", eventHandler);
//     tableDataEl.appendChild(button);
//     return tableDataEl;
//   }
//   createTableData(el) {
//     const tableData = document.createElement("td");
//     tableData.innerHTML = el;
//     return tableData;
//   }
//   enableUser(users, user, property) {
//     user[property] = !user[property];
//     this.updateStore("users", users);
//   }
//   deleteUser(users, index) {
//     users.splice(index, 1);
//     this.updateStore("users", users);
//   }
//   updateStore(storeToUpdate, updates) {
//     store.setStore(storeToUpdate, updates);
//     this.render(updates);
//   }
// }

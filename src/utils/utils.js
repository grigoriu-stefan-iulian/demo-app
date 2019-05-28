import { store } from "../store/store";

export const generateDummyUsers = () => {
  const users = [];
  for (let i = 0; i < 25; i++) {
    users.push({
      fName: `John${i}`,
      lName: "Doe",
      email: `user.email_${i}@gmail.com`,
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

export const removeEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.removeEventListener(type, handler);
};

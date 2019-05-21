const store = {
  getStore() {
    return JSON.parse(localStorage.getItem("users")) || [];
  },
  setStore(users) {
    return localStorage.setItem("users", JSON.stringify(users));
  },
  updateStore() {}
};

export default store;

const store = {
  getStore() {
    return JSON.parse(localStorage.getItem("users")) || [];
  },
  setStore(users) {
    localStorage.setItem("users", JSON.stringify(users));
  },
  getSession() {
    return JSON.parse(sessionStorage.getItem("user"));
  },
  setSession(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  },
  removeSession() {
    sessionStorage.removeItem("user");
  }
};

export default store;

const store = {
  getStore(store) {
    return JSON.parse(localStorage.getItem(store)) || [];
  },
  setStore(storeName, store) {
    localStorage.setItem(storeName, JSON.stringify(store));
  },
  getSession(session) {
    return JSON.parse(sessionStorage.getItem(session));
  },
  setSession(sessionName, session) {
    sessionStorage.setItem(sessionName, JSON.stringify(session));
  },
  removeSession(sessionName) {
    sessionStorage.removeItem(sessionName);
  }
};

export default store;

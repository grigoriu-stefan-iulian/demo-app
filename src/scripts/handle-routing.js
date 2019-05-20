import routes from "../routers/routes";

const handleNavItemClick = () => {
  try {
    location.hash === ""
      ? routes.dashboard()
      : routes[location.hash.substr(1)]();
  } catch (err) {
    routes.notfound();
  }
};

export default handleNavItemClick;

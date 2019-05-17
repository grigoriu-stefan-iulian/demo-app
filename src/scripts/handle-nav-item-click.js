import routes from "../routers/routes";

const handleNavItemClick = () => {
  window.location.hash === ""
    ? routes["#dashboard"]()
    : routes[window.location.hash]();
};

export default handleNavItemClick;

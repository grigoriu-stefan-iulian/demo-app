import { routes } from "../routers/routes";

export const handleNavItemClick = () => {
  routes[window.location.hash || "/"]();
};

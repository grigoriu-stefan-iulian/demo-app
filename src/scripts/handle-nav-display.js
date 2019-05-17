import nav from "../pages/nav.html";

const handleNavDisplay = () => {
  const appNav = document.getElementById("app-nav");
  appNav.innerHTML = nav;
};

export default handleNavDisplay;

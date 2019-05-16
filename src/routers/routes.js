import { loginForm } from '../components/login.page';
import { HomePage } from '../components/home.page';

export const routes = {
   // '/': homePage,
   '/': new HomePage(document.getElementById('app')),
   // '/login': loginForm, // new Router(loginHtml)
   // '/logout': logoutPage,
   // '/register': registerForm,
   // '/dashboard': dashboarPage,
   // '/users': usersPage,

  };
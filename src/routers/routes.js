import { loginForm } from '../components/login.page';
import { homePage } from '../components/home.page';

export const Routes = {
    '/': homePage,
    '/login': loginForm, // new Router(loginHtml)
   // '/logout': logoutPage,
   // '/register': registerForm,
   // '/dashboard': dashboarPage,
   // '/users': usersPage,

  };
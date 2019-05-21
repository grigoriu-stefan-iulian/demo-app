import RouteBase from "../routers/route-base";
import renderUsers from "../shares/render-users";

class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    renderUsers();
  }
}

export default UsersPage;

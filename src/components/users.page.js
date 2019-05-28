import RouteBase from "../routers/route-base";
import { renderUsers } from "../utils/render-users";

export default class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    new renderUsers();
  }
}

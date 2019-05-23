import RouteBase from "../routers/route-base";
import { RenderUsers } from "../utils/utils";
//import store from "../store/store";

export default class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    new RenderUsers();
  }
}

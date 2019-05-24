import RouteBase from "../routers/route-base";
import { RenderUsers } from "../utils/utils";

export default class UsersPage extends RouteBase {
  constructor(htmlPage) {
    super(htmlPage);
    new RenderUsers();
  }
}

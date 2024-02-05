import {Routes} from "../interfaces/routesInterface";
import AttacksRoute from "./attacksRoute";

const appRoutes: Routes[] = [];

appRoutes.push(new AttacksRoute());

export default appRoutes;
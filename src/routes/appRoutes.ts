import {Routes} from "../interface/routesInterface";
import AttacksRoute from "./attacksRoute";

const appRoutes: Routes[] = [];

appRoutes.push(new AttacksRoute());

export default appRoutes;
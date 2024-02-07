import { Routes } from '@interfaces/routesInterface';
import AttacksRoute from '@routes/attacksRoute';

const appRoutes: Routes[] = [];

appRoutes.push(new AttacksRoute());

export default appRoutes;

import AttacksRoute from "./routes/attacksRoute";

process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from './app';
import appRoutes from "./routes/appRoutes";

const app = new App(appRoutes);

app.listen();

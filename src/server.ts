import 'dotenv/config';
import App from 'app';
import appRoutes from 'routes/appRoutes';

const app = new App(appRoutes);

app.listen();

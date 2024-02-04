import express, {NextFunction, Request, Response} from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { Routes } from 'interface/routesInterface';
import { logger, stream } from 'utils/logger';
import config from 'config';
import errorHandler from "./middlewares/errorHandler";
import AppDatabase from "./dao/appDatabase";

class App {
  private readonly app: express.Application;

  private readonly port: string | number;

  private readonly env: string;

  /**
   * Configures the necessary routes and other resources.
   *
   * @param routes
   */
  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';

    AppDatabase.getInstance().authenticate();
    this.initializeRoutes(routes);
    this.initializeMiddlewares();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.log.format, { stream }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(errorHandler);
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
}

export default App;

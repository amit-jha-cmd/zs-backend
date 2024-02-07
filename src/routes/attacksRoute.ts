import { Router } from 'express';
import AttacksController from '@controllers/attacksController';
import { Routes } from '@interfaces/routesInterface';

class AttacksRoute implements Routes {
  private basePath = '/attacks';
  private overviewPath: string = this.basePath + '/overview';
  private inDateRangePath: string = this.basePath + '/in-date-range';

  public router = Router();

  constructor() {
    const controllerInstance: AttacksController = AttacksController.getInstance();
    this.router.get(this.overviewPath, controllerInstance.getOverview);
    this.router.get(this.inDateRangePath, controllerInstance.getAttacksInRange);
  }
}

export default AttacksRoute;

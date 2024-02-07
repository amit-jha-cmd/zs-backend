import { NextFunction, Request, Response } from 'express';
import AttacksDao from '@dao/attacksDao';
import { AttackModel } from '@models/AttackModel';
import sendAppResponse from '@utils/sendAppResponse';
import GetAttacksRequestInterface from '@interfaces/requests/getAttacksRequestInterface';
import GetOverviewRequestInterface from '@interfaces/requests/getOverviewRequestInterface';

class AttacksController {
  private static instance: AttacksController | null = null;

  public static getInstance(): AttacksController {
    if (!AttacksController.instance) {
      AttacksController.instance = new AttacksController();
    }

    return AttacksController.instance;
  }

  public async getOverview(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      Record<string, unknown>,
      GetOverviewRequestInterface
    >,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { startDateTime, endDateTime } = req.query;

      const attacksDao: AttacksDao = AttacksDao.getInstance();

      // JUST FOR DEMO PURPOSE
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const entries: AttackModel[] = await attacksDao.getAttackEntryOverviewInRange(startDateTime, endDateTime);
      sendAppResponse<AttackModel[] | null>(res, entries);
    } catch (e) {
      next(e);
    }
  }

  public async getAttacksInRange(
    req: Request<Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, GetAttacksRequestInterface>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { startDateTime, endDateTime, page, pageSize, sortBy } = req.query;

      const attacksDao: AttacksDao = AttacksDao.getInstance();

      // JUST FOR DEMO PURPOSE
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const entries: AttackModel[] = await attacksDao.getAttacksInRange(
        startDateTime,
        endDateTime,
        page,
        pageSize,
        sortBy,
      );
      sendAppResponse<AttackModel[] | null>(res, entries);
    } catch (e) {
      next(e);
    }
  }
}

export default AttacksController;

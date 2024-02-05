import {NextFunction, Request, Response} from "express";
import AttacksDao from "../dao/attacksDao";
import {AttackModel} from "../models/AttackModel";
import sendAppResponse from "../utils/sendAppResponse";
import GetAttacksRequestInterface from "../interfaces/requests/getAttacksRequestInterface";
import GetOverviewRequestInterface from "../interfaces/requests/getOverviewRequestInterface";

class AttacksController {
    private static instance: AttacksController | null = null;

    public static getInstance(): AttacksController {
        if(!AttacksController.instance) {
            AttacksController.instance = new AttacksController();
        }

        return AttacksController.instance;
    }


    public async getOverview(req: Request<{}, {}, {}, GetOverviewRequestInterface>, res: Response, next: NextFunction) {
        try {
            const {startDateTime, endDateTime} = req.query;

            let attacksDao: AttacksDao = AttacksDao.getInstance();

            let entries: AttackModel[] = await attacksDao.getAttackEntryOverviewInRange(startDateTime, endDateTime);
            sendAppResponse<AttackModel[] | null>(res, entries);
        } catch (e) {
            next(e);
        }
    }

    public async getAttacksInRange(req: Request<{}, {}, {}, GetAttacksRequestInterface>, res: Response, next: NextFunction) {
        try {
            const {startDateTime, endDateTime, page, pageSize} = req.query;

            let attacksDao: AttacksDao = AttacksDao.getInstance();

            let entries: AttackModel[] = await attacksDao.getAttacksInRange(startDateTime, endDateTime, page, pageSize);
            sendAppResponse<AttackModel[] | null>(res, entries);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

export default AttacksController;
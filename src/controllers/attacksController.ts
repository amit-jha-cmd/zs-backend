import {NextFunction, Request, Response} from "express";
import AttacksDao from "../dao/attacksDao";
import {AttackModel} from "../models/AttackModel";
import sendAppResponse from "../utils/sendAppResponse";

class AttacksController {
    private static instance: AttacksController | null = null;

    public static getInstance(): AttacksController {
        if(!AttacksController.instance) {
            AttacksController.instance = new AttacksController();
        }

        return AttacksController.instance;
    }


    public async getOverview(req: Request, res: Response, next: NextFunction) {
        try {
            let query = req.query;
            let startDatetime: string = <string>query.startDateTime;
            let endDateTime: string = <string>query.endDateTime;

            let attacksDao: AttacksDao = AttacksDao.getInstance();

            let entries: AttackModel[] = await attacksDao.getAttackEntryInDateRange(startDatetime, endDateTime);
            sendAppResponse<AttackModel[] | null>(res, entries);
        } catch (e) {
            next(e);
        }
    }

    public async getAttacksInRange(req: Request, res: Response, next: NextFunction) {
        try {
            let query = req.query;
            let startDatetime: string = <string>query.startDateTime;
            let endDateTime: string = <string>query.endDateTime;

            let attacksDao: AttacksDao = AttacksDao.getInstance();

            let entries: AttackModel[] = await attacksDao.getAttackEntryInDateRange(startDatetime, endDateTime);
            sendAppResponse<AttackModel[] | null>(res, entries);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

export default AttacksController;
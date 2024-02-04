import AppDatabase, {Database} from "./appDatabase";
import {Op, Sequelize, where} from "sequelize";
import attackModel, {AttackModel} from "../models/AttackModel";

class AttacksDao {
    private static instance: AttacksDao | null = null;

    constructor() {}

    public static getInstance() {
        if(!this.instance) {
            this.instance = new AttacksDao();
        }

        return this.instance;
    }

    public async getAttackEntryInDateRange(startDateTime: string, endDateTime: string) : Promise<AttackModel[]> {
        let db: Sequelize = AppDatabase.getInstance();

        let result: AttackModel[] = [];

        let sdtObj: Date = new Date(startDateTime);
        let edtObj: Date = new Date(endDateTime);

        if(db) {
            result = await attackModel(db).findAll({
                where: {
                    datetime: {
                        [Op.between]: [
                            sdtObj,
                            edtObj,
                        ]
                    }
                }
            });
        }

        return result;
    }
}


export default AttacksDao;

import AppDatabase from "@dao/appDatabase";
import sequelize, {Op, Sequelize} from "sequelize";
import attackModel, {AttackModel} from "@models/AttackModel";

class AttacksDao {
    private static instance: AttacksDao | null = null;

    private db: Sequelize = AppDatabase.getInstance();

    constructor() {
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new AttacksDao();
        }

        return this.instance;
    }

    public async getAttackEntryOverviewInRange(startDateTime: string, endDateTime: string): Promise<AttackModel[]> {
        let result: AttackModel[] = [];

        let sdtObj: Date = new Date(startDateTime);
        let edtObj: Date = new Date(endDateTime);

        if (this.db) {
            result = await attackModel(this.db).findAll({
                where: {
                    timestamp: {
                        [Op.between]: [
                            sdtObj,
                            edtObj,
                        ]
                    }
                },
                attributes: [
                    [sequelize.fn('date_trunc', 'min', sequelize.col('timestamp')), 'minute'],
                    [sequelize.fn('count', '*'), 'count']
                ],
                group: ["timestamp"]
            });
        }

        return result;
    }

    public async getAttacksInRange(startDateTime: string, endDateTime: string, page: number, pageSize: number = 10): Promise<AttackModel[]> {
        let result: AttackModel[] = [];

        let sdtObj: Date = new Date(startDateTime);
        let edtObj: Date = new Date(endDateTime);

        const offset = (page - 1) * 10;

        if (this.db) {
            result = await attackModel(this.db).findAll({
                limit: pageSize,
                offset: offset,
                where: {
                    timestamp: {
                        [Op.between]: [
                            sdtObj,
                            edtObj,
                        ]
                    }
                },
                attributes: [
                    "id",
                    "timestamp",
                    "attackerId",
                    "attackerName",
                    "attackerIp",
                    "type",
                    "decoyName",]
            });
        }

        return result;
    }
}


export default AttacksDao;

import AppDatabase from '@dao/appDatabase';
import sequelize, { Op, Sequelize } from 'sequelize';
import attackModel, { AttackModel } from '@models/AttackModel';

class AttacksDao {
  private static instance: AttacksDao | null = null;

  private db: Sequelize = AppDatabase.getInstance();

  public static getInstance(): AttacksDao {
    if (!this.instance) {
      this.instance = new AttacksDao();
    }

    return this.instance;
  }

  public async getAttackEntryOverviewInRange(startDateTime: string, endDateTime: string): Promise<AttackModel[]> {
    let result: AttackModel[] = [];

    const sdtObj: Date = new Date(startDateTime);
    const edtObj: Date = new Date(endDateTime);

    if (this.db) {
      result = await attackModel(this.db).findAll({
        where: {
          timestamp: {
            [Op.between]: [sdtObj, edtObj],
          },
        },
        attributes: [
          [sequelize.fn('date_trunc', 'min', sequelize.col('timestamp')), 'minute'],
          [sequelize.fn('count', '*'), 'count'],
        ],
        group: ['timestamp'],
      });
    }

    return result;
  }

  public async getAttacksInRange(
    startDateTime: string,
    endDateTime: string,
    page: number,
    pageSize = 10,
    sortBy: string | undefined,
  ): Promise<AttackModel[]> {
    let result: AttackModel[] = [];

    const sdtObj: Date = new Date(startDateTime);
    const edtObj: Date = new Date(endDateTime);

    const offset = (page - 1) * 10;

    if (this.db) {
      result = await attackModel(this.db).findAll({
        limit: pageSize,
        offset: offset,
        order: sortBy ? [sortBy] : undefined,
        where: {
          timestamp: {
            [Op.between]: [sdtObj, edtObj],
          },
        },
        attributes: ['id', 'timestamp', 'attackerId', 'attackerName', 'attackerIp', 'type', 'decoyName'],
      });
    }

    return result;
  }
}

export default AttacksDao;

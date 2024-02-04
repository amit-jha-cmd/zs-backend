import { Sequelize, DataTypes, Model } from 'sequelize';

export interface Attack {
    id: number;
    datetime: Date;
    attackerId: string;
}

export type AttackCreationAttribute = Pick<Attack, 'datetime'>;

export class AttackModel extends Model<Attack, AttackCreationAttribute> implements Attack {
    public id!: number;

    public datetime!: Date;

    public attackerId!: string
}

export default function (sequelize: Sequelize): typeof AttackModel {
    AttackModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            datetime: {
                type: DataTypes.DATE,
                allowNull: false,
                unique: false,
            },
            attackerId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            tableName: 'attack',
            sequelize,
        },
    );

    return AttackModel;
}
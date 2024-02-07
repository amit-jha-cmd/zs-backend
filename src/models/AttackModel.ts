import { Sequelize, DataTypes, Model } from 'sequelize';

export interface Attack {
  id: number;
  type: string;
  severity: string;
  killChainPhase: string;
  timestamp: Date;
  attackerId: string;
  attackerIp: string;
  attackerName: string;
  attackerPort: string;
  decoyId: string;
  decoyName: string;
  decoyGroup: string;
  decoyIp: string;
  decoyPort: string;
  decoyType: string;
}

export type AttackCreationAttribute = Pick<Attack, 'id'>;

export class AttackModel extends Model<Attack, AttackCreationAttribute> implements Attack {
  public id!: number;
  public type!: string;
  public severity!: string;
  public killChainPhase!: string;
  public timestamp!: Date;
  public attackerId!: string;
  public attackerIp!: string;
  public attackerName!: string;
  public attackerPort!: string;
  public decoyId!: string;
  public decoyName!: string;
  public decoyGroup!: string;
  public decoyIp!: string;
  public decoyPort!: string;
  public decoyType!: string;
}

export default function (sequelize: Sequelize): typeof AttackModel {
  AttackModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      severity: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      killChainPhase: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false,
      },
      attackerId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      attackerIp: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      attackerName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      attackerPort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      decoyId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      decoyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      decoyGroup: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      decoyIp: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      decoyPort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      decoyType: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'attack',
      timestamps: false,
      sequelize,
    },
  );

  return AttackModel;
}

import { Sequelize, DataTypes, Model } from 'sequelize';

export interface Attack {
    id: number;
    type: string,
    severity: string,
    killChainPhase: string,
    timestamp: Date,
    attackerId: string,
    attackerIp: string,
    attackerName: string,
    attackerPort: string,
    decoyId: string,
    decoyName: string,
    decoyGroup: string,
    decoyIp: string,
    decoyPort: string,
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
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            severity:  {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            killChainPhase: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "kill_chain_phase"
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
                field: "attacker_id"
            },
            attackerIp: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "attacker_ip"
            },
            attackerName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "attacker_name"
            },
            attackerPort: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
                field: "attacker_port"
            },
            decoyId:  {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "decoy_id"
            },
            decoyName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "decoy_name"
            },
            decoyGroup: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "decoy_group"
            },
            decoyIp:  {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
                field: "decoy_ip"
            },
            decoyPort:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
                field: "decoy_port"
            },
            decoyType: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                field: "decoy_type"
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
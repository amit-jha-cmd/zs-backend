import { Sequelize, Model } from 'sequelize';
export interface ComputerGroup {
    id: number;
    name: string;
}
export declare type ComputerCreationAttributions = Pick<ComputerGroup, 'name'>;
export declare class ComputerGroupModel extends Model<ComputerGroup, ComputerCreationAttributions> implements ComputerGroup {
    id: number;
    name: string;
}
export default function (sequelize: Sequelize): typeof ComputerGroupModel;

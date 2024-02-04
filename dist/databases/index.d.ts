import Sequelize from 'sequelize';
declare const DB: {
    ComputerGroups: typeof import("../models/computer_groups.model").ComputerGroupModel;
    sequelize: Sequelize.Sequelize;
    Sequelize: typeof Sequelize;
};
export default DB;

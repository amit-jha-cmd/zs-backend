"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerGroupModel = void 0;
const sequelize_1 = require("sequelize");
class ComputerGroupModel extends sequelize_1.Model {
}
exports.ComputerGroupModel = ComputerGroupModel;
function default_1(sequelize) {
    ComputerGroupModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'computer_groups',
        sequelize,
    });
    return ComputerGroupModel;
}
exports.default = default_1;
//# sourceMappingURL=computer_groups.model.js.map
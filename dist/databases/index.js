"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = (0, tslib_1.__importDefault)(require("../config"));
const sequelize_1 = (0, tslib_1.__importDefault)(require("sequelize"));
const logger_1 = require("../utils/logger");
const computer_groups_model_1 = (0, tslib_1.__importDefault)(require("../models/computer_groups.model"));
const { host, port, user, password, database, pool } = config_1.default.dbConfig;
const sequelize = new sequelize_1.default.Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres',
    port: port,
    pool: {
        min: pool.min,
        max: pool.max,
    },
    logQueryParameters: process.env.NODE_ENV === 'development',
    logging: (query, time) => {
        logger_1.logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true,
});
sequelize.authenticate();
const DB = {
    ComputerGroups: (0, computer_groups_model_1.default)(sequelize),
    sequelize,
    Sequelize: // connection instance (RAW queries)
    sequelize_1.default, // library
};
exports.default = DB;
//# sourceMappingURL=index.js.map
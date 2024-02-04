"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    env: 'development',
    dbConfig: {
        host: 'localhost',
        port: 5431,
        user: 'ajha',
        password: 'Hello@123',
        database: 'ajha',
        pool: {
            min: 0,
            max: 5,
        },
    },
    log: {
        format: 'dev',
        dir: '../logs',
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map
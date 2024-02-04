import config from '../config';
import {Sequelize} from 'sequelize';
import {logger} from '../utils/logger';
import computer_groupsModel from '../models/computerGroupsModel';

const {host, port, user, password, database, pool} = config.dbConfig;

/**
 *
 * A contract to on top of the vendor of choice for DAO
 *
 */
export abstract class Database {
    public static getInstance: Sequelize | null;
}

/**
 *
 * An app level layer on top of the DAO vendor.
 *
 */
class AppDatabase implements Database {
    private static instance: Sequelize | null = null;

    constructor() {}

    /**
     * To ensure there is only ever one instance of {AppDatabase} we can implement Factory Design Pattern like below.
     *
     * {getInstance} is generally how SDKs implement Factor pattern internally
     */
    public static getInstance(): Sequelize {
        if(!AppDatabase.instance) {
            AppDatabase.instance = new Sequelize(database, user, password, {
                host: host,
                dialect: 'postgres',
                port: port,
                pool: {
                    min: pool.min,
                    max: pool.max,
                },
                logQueryParameters: process.env.NODE_ENV === 'development',
                logging: (query, time) => {
                    logger.info(time + 'ms' + ' ' + query);
                },
                benchmark: true,
            });
        }

        return AppDatabase.instance;
    }

    public async nudge() : Promise<void> {
        if(!AppDatabase.instance) {
            throw("Database is not configured");
        }

        await AppDatabase.instance?.authenticate();
    }
}

export default AppDatabase;

// sequelize.authenticate();
//
// const DB = {
//   ComputerGroups: computer_groupsModel(sequelize),
//   sequelize, // connection instance (RAW queries)
//   Sequelize, // library
// };
//
// export default DB;

import config from 'config';
import {Sequelize} from 'sequelize';
import {logger} from '@utils/logger';

const {host, port, user, password, database, pool} = config.dbConfig;

/**
 *
 * An app level layer on top of the DAO vendor.
 *
 */
class AppDatabase {
    private static instance: Sequelize | null = null;

    constructor() {}

    /**
     * To ensure there is only ever one instance of {AppDatabase} we can implement Factory Design Pattern like below.
     * {getInstance} is generally how SDKs implement Factor pattern internally
     *
     * The vendor internally handles connection pooling but our app should not create object instances unnecessarily
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
}

export default AppDatabase;

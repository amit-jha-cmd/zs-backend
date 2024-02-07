import config from 'config';
import sequelize, { Sequelize } from 'sequelize';
import { logger } from '@utils/logger';
import * as process from "process";

const {HOST, USER, PASSWORD, DATABASE} = process.env;


/**
 *
 * An app level layer on top of the DAO vendor.
 *
 */
class AppDatabase {
  private static instance: Sequelize | null = null;

  /**
   * To ensure there is only ever one instance of {AppDatabase} we can implement Factory Design Pattern like below.
   * {getInstance} is generally how SDKs implement Factor pattern internally
   *
   * The vendor internally handles connection pooling but our app should not create object instances unnecessarily
   */
  public static getInstance(): Sequelize {

    if (!AppDatabase.instance) {
      AppDatabase.instance = new Sequelize(DATABASE!, USER!, PASSWORD, {
        host: HOST,
        dialect: 'postgres',
        password: PASSWORD,
        database: DATABASE,
        port: 5431,
        pool: {
          min: 0,
          max: 5,
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

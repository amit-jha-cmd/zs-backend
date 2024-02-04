import config from '../config';
import Sequelize from 'sequelize';
import { logger } from '../utils/logger';
import computer_groupsModel from '../models/computer_groups.model';


const { host, port, user, password, database, pool } = config.dbConfig;
const sequelize = new Sequelize.Sequelize(database, user, password, {
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

sequelize.authenticate();

const DB = {
  ComputerGroups: computer_groupsModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;

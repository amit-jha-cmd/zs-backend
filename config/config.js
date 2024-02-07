require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "postgres",
    "define": {
      "timestamps": false,
    }
  }
};
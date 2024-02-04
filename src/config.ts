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
} as const;

export default config;

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const databaseProviders: MysqlConnectionOptions = {
  name: 'mysql_conn',
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  entities: ['../entities/*.ts'],
};

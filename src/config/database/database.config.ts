import { DataSourceOptions } from 'typeorm';
const databaseConfig = (): DataSourceOptions => ({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT,
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../../migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: process.env.MIGRATE_DB == 'true',
  synchronize: process.env.UPDATE_DB == 'true',
  logging: process.env.NODE_ENV !== 'production',
  type: 'postgres',
  extra: {
    connectionLimit: 1000,
  },
});

export default databaseConfig;

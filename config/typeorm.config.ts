import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ping@123',
  database: 'visi-ecommerce',
  autoLoadEntities: true,
  synchronize: true,
};

import { DataSource } from 'typeorm';
import { UsersIntegration } from '../entities/users-integration.entity';

export const userIntegrationProvider = [
  {
    provide: 'USER_INTEGRATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersIntegration),
    inject: ['DATA_SOURCE'],
  },
];

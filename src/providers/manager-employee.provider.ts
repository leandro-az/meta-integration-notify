import { DataSource } from 'typeorm';
import { ManagerEmployee } from '../entities/manager-employee.entity';

export const managerEmployeeProvider = [
  {
    provide: 'MANAGER_EMPLOYEE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ManagerEmployee),
    inject: ['DATA_SOURCE'],
  },
];

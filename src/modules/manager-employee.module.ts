import { Module } from '@nestjs/common';
import { ManagerEmployeeService } from '../services/manager-employee.service';
import { ManagerEmployeeResolver } from '../resolvers/manager-employee.resolver';
import { managerEmployeeProvider } from '../providers/manager-employee.provider';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...managerEmployeeProvider,
    ManagerEmployeeResolver,
    ManagerEmployeeService,
  ],
})
export class ManagerEmployeeModule {}

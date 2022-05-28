import { Module } from '@nestjs/common';
import { ManagerEmployeeService } from '../services/manager-employee.service';
import { ManagerEmployeeResolver } from '../resolvers/manager-employee.resolver';

@Module({
  providers: [ManagerEmployeeResolver, ManagerEmployeeService],
})
export class ManagerEmployeeModule {}

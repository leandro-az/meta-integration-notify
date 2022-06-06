import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersResolver } from '../resolvers/users.resolver';
import { DatabaseModule } from './database.module';
import { userProvider } from '../providers/user.provider';
import { managerEmployeeProvider } from '../providers/manager-employee.provider';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProvider,
    ...managerEmployeeProvider,
    UsersResolver,
    UsersService,
  ],
})
export class UsersModule {}

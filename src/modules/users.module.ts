import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersResolver } from '../resolvers/users.resolver';
import { DatabaseModule } from './database.module';
import { userProvider } from '../providers/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, UsersResolver, UsersService],
})
export class UsersModule {}

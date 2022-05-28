import { Module } from '@nestjs/common';
import { UsersIntegrationsService } from '../services/users-integrations.service';
import { UsersIntegrationsResolver } from '../resolvers/users-integrations.resolver';

@Module({
  providers: [UsersIntegrationsResolver, UsersIntegrationsService],
})
export class UsersIntegrationsModule {}

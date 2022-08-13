import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { userIntegrationProvider } from '../providers/user-integration.provider';
import { UsersIntegrationsService } from '../services/users-integrations.service';
import { UsersIntegrationsResolver } from '../resolvers/users-integrations.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userIntegrationProvider,
    UsersIntegrationsResolver,
    UsersIntegrationsService,
  ],
})
export class UsersIntegrationsModule {}

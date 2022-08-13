import { Module } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { LeadsResolver } from '../resolvers/leads.resolver';
import { DatabaseModule } from './database.module';
import { leadProvider } from '../providers/lead.provider';
import { userIntegrationProvider } from '../providers/user-integration.provider';
import { LeadController } from '../controller/lead.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userIntegrationProvider,
    ...leadProvider,
    LeadsResolver,
    LeadsService,
  ],
  controllers: [LeadController],
})
export class LeadsModule {}

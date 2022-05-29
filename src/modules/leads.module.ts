import { Module } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { LeadsResolver } from '../resolvers/leads.resolver';
import { DatabaseModule } from './database.module';
import { leadProvider } from '../providers/lead.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...leadProvider, LeadsResolver, LeadsService],
})
export class LeadsModule {}

import { Module } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { LeadsResolver } from '../resolvers/leads.resolver';

@Module({
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}

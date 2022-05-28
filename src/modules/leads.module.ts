import { Module } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { LeadsResolver } from '../resolvers/leads.resolver';
import { Lead } from '../entities/lead.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}

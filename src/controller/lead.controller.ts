import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { CreateLeadInput } from '../dto/create-lead.input';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadsService: LeadsService) {}
  @Post()
  create(
    @Body() createLeadInput: CreateLeadInput,
    @Query('userRelated') userRelated: string,
  ): boolean {
    this.leadsService.create(createLeadInput, userRelated);
    return true;
  }
  @Get()
  healthCheck() {
    return true;
  }
}

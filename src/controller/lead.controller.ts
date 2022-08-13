import { Controller, Post, Body, Query, Get, Param } from '@nestjs/common';
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
  @Post('/recive/:userIntegrationId')
  recive(
    @Body() createLeadInput: CreateLeadInput,
    @Param('userIntegrationId') userIntegrationId: string,
  ): boolean {
    this.leadsService.recive(createLeadInput, userIntegrationId);
    return true;
  }
  @Get()
  healthCheck() {
    return true;
  }
}

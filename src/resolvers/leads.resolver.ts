import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeadsService } from '../services/leads.service';
import { CreateLeadInput } from '../dto/create-lead.input';
import { UpdateLeadInput } from '../dto/update-lead.input';
import { Authorize } from 'src/interceptor/authorize.interceptor';
import { UseGuards } from '@nestjs/common';

@Resolver('Lead')
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @UseGuards(Authorize)
  @Mutation('createLead')
  create(
    @Args('createLeadInput') createLeadInput: CreateLeadInput,
    @Args('userRelated') userRelated: string,
  ) {
    return this.leadsService.create(createLeadInput, userRelated);
  }
  @UseGuards(Authorize)
  @Query('lead')
  findOne(@Args('leadId') leadId: string) {
    return this.leadsService.findOne(leadId);
  }

  @UseGuards(Authorize)
  @Query('leadsByUser')
  findLeadsByUser(@Args('userId') userId: string) {
    if (!userId) throw new Error('User not provider');
    return this.leadsService.findLeadsByUser(userId);
  }
  @UseGuards(Authorize)
  @Mutation('updateLead')
  update(@Args('updateLeadInput') updateLeadInput: UpdateLeadInput) {
    return this.leadsService.update(updateLeadInput);
  }
  @UseGuards(Authorize)
  @Mutation('removeLead')
  remove(@Args('leadId') leadId: string) {
    return this.leadsService.remove(leadId);
  }
}

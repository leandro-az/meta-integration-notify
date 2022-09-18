import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeadsService } from '../services/leads.service';
import { CreateLeadInput } from '../dto/create-lead.input';
import { UpdateLeadInput } from '../dto/update-lead.input';
import { LeadStatus } from '../constants/lead-status.constant';

@Resolver('Lead')
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Mutation('createLead')
  create(
    @Args('createLeadInput') createLeadInput: CreateLeadInput,
    @Args('userRelated') userRelated: string,
  ) {
    return this.leadsService.create(createLeadInput, userRelated);
  }

  @Query('lead')
  findOne(@Args('leadId') leadId: string) {
    return this.leadsService.findOne(leadId);
  }

  @Query('leadsByUser')
  findLeadsByUser(@Args('userId') userId: string) {
    return this.leadsService.findLeadsByUser(userId);
  }

  @Mutation('updateLead')
  update(@Args('updateLeadInput') updateLeadInput: UpdateLeadInput) {
    return this.leadsService.update(updateLeadInput);
  }

  @Mutation('removeLead')
  remove(@Args('leadId') leadId: string) {
    return this.leadsService.remove(leadId);
  }
}

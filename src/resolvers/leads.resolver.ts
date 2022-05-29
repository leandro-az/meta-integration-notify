import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeadsService } from '../services/leads.service';
import { CreateLeadInput } from '../dto/create-lead.input';
import { UpdateLeadInput } from '../dto/update-lead.input';

@Resolver('Lead')
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Mutation('createLead')
  create(@Args('createLeadInput') createLeadInput: CreateLeadInput) {
    return this.leadsService.create(createLeadInput);
  }

  @Query('lead')
  findOne(@Args('id') id: number) {
    return this.leadsService.findOne(id);
  }

  @Mutation('updateLead')
  update(@Args('updateLeadInput') updateLeadInput: UpdateLeadInput) {
    return this.leadsService.update(updateLeadInput.id, updateLeadInput);
  }

  @Mutation('removeLead')
  remove(@Args('id') id: number) {
    return this.leadsService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersIntegrationsService } from '../services/users-integrations.service';
import { Authorize } from 'src/interceptor/authorize.interceptor';
import { UseGuards } from '@nestjs/common';

@Resolver('UsersIntegration')
export class UsersIntegrationsResolver {
  constructor(
    private readonly usersIntegrationsService: UsersIntegrationsService,
  ) {}

  @Mutation('createUserIntegration')
  create(
    @Args('managerUserId')
    managerUserId: string,
  ) {
    return this.usersIntegrationsService.create(managerUserId);
  }
  @UseGuards(Authorize)
  @Query('usersIntegration')
  findOne(
    @Args('managerUserId')
    managerUserId: string,
  ) {
    return this.usersIntegrationsService.findOne(managerUserId);
  }

  // @Query('usersIntegration')
  // findOne(@Args('id') id: number) {
  //   return this.usersIntegrationsService.findOne(id);
  // }

  // @Mutation('updateUsersIntegration')
  // update(
  //   @Args('updateUsersIntegrationInput')
  //   updateUsersIntegrationInput: UpdateUsersIntegrationInput,
  // ) {
  //   return this.usersIntegrationsService.update(
  //     updateUsersIntegrationInput.id,
  //     updateUsersIntegrationInput,
  //   );
  // }

  // @Mutation('removeUsersIntegration')
  // remove(@Args('id') id: number) {
  //   return this.usersIntegrationsService.remove(id);
  // }
}

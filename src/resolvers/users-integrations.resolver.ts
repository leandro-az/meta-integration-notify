import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersIntegrationsService } from '../services/users-integrations.service';
import { CreateUsersIntegrationInput } from '../dto/create-users-integration.input';
import { UpdateUsersIntegrationInput } from '../dto/update-users-integration.input';

@Resolver('UsersIntegration')
export class UsersIntegrationsResolver {
  constructor(
    private readonly usersIntegrationsService: UsersIntegrationsService,
  ) {}

  @Mutation('createUsersIntegration')
  create(
    @Args('createUsersIntegrationInput')
    createUsersIntegrationInput: CreateUsersIntegrationInput,
  ) {
    return this.usersIntegrationsService.create(createUsersIntegrationInput);
  }

  @Query('usersIntegrations')
  findAll() {
    return this.usersIntegrationsService.findAll();
  }

  @Query('usersIntegration')
  findOne(@Args('id') id: number) {
    return this.usersIntegrationsService.findOne(id);
  }

  @Mutation('updateUsersIntegration')
  update(
    @Args('updateUsersIntegrationInput')
    updateUsersIntegrationInput: UpdateUsersIntegrationInput,
  ) {
    return this.usersIntegrationsService.update(
      updateUsersIntegrationInput.id,
      updateUsersIntegrationInput,
    );
  }

  @Mutation('removeUsersIntegration')
  remove(@Args('id') id: number) {
    return this.usersIntegrationsService.remove(id);
  }
}

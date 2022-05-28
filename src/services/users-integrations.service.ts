import { Injectable } from '@nestjs/common';
import { CreateUsersIntegrationInput } from '../dto/create-users-integration.input';
import { UpdateUsersIntegrationInput } from './dto/update-users-integration.input';

@Injectable()
export class UsersIntegrationsService {
  create(createUsersIntegrationInput: CreateUsersIntegrationInput) {
    return 'This action adds a new usersIntegration';
  }

  findAll() {
    return `This action returns all usersIntegrations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersIntegration`;
  }

  update(id: number, updateUsersIntegrationInput: UpdateUsersIntegrationInput) {
    return `This action updates a #${id} usersIntegration`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersIntegration`;
  }
}

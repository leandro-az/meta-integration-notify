import { CreateUsersIntegrationInput } from './create-users-integration.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUsersIntegrationInput extends PartialType(
  CreateUsersIntegrationInput,
) {
  id: number;
}

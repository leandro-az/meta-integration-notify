import { CreateUserInput } from './create-user.input';

export class CreateUserEmployeeInput {
  managerUserId: string;
  employeeUserInput: CreateUserInput;
}

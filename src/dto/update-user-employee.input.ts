import { CreateUserEmployeeInput } from './create-user-employee.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateManagerEmployeeInput extends PartialType(
  CreateUserEmployeeInput,
) {}

import { CreateManagerEmployeeInput } from './create-manager-employee.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateManagerEmployeeInput extends PartialType(
  CreateManagerEmployeeInput,
) {
  id: number;
}

import { CreateLeadInput } from './create-lead.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLeadInput extends PartialType(CreateLeadInput) {
  id: number;
}

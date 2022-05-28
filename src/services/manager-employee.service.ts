import { Injectable } from '@nestjs/common';
import { CreateManagerEmployeeInput } from '../dto/create-manager-employee.input';
import { UpdateManagerEmployeeInput } from '../dto/update-manager-employee.input';

@Injectable()
export class ManagerEmployeeService {
  create(createManagerEmployeeInput: CreateManagerEmployeeInput) {
    return 'This action adds a new managerEmployee';
  }

  findAll() {
    return `This action returns all managerEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerEmployee`;
  }

  update(id: number, updateManagerEmployeeInput: UpdateManagerEmployeeInput) {
    return `This action updates a #${id} managerEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerEmployee`;
  }
}

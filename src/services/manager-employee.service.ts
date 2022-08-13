import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ManagerEmployee } from '../entities/manager-employee.entity';

@Injectable()
export class ManagerEmployeeService {
  constructor(
    @Inject('MANAGER_EMPLOYEE_REPOSITORY')
    private managerEmployeeRepository: Repository<ManagerEmployee>,
  ) {}

  findAllEmployeesByManager(managerUserId: string) {
    return this.managerEmployeeRepository.find({
      where: {
        managerIdFk: managerUserId,
      },
      relations: ['employeeUser'],
    });
  }

  findManagerByEmployee(employeeUserId: string) {
    return this.managerEmployeeRepository.find({
      where: {
        employeeIdFk: employeeUserId,
      },
      relations: ['managerUser'],
    });
  }
  // create(createManagerEmployeeInput: CreateUserEmployeeInput) {
  //   return 'This action adds a new managerEmployee';
  // }

  findAll() {
    return `This action returns all managerEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerEmployee`;
  }
}

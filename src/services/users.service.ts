import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { In, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ManagerEmployee } from '../entities/manager-employee.entity';
import { v4 } from 'uuid';
import { Roles } from '../constants/roles.constant';
import { CreateUserEmployeeInput } from '../dto/create-user-employee.input';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('MANAGER_EMPLOYEE_REPOSITORY')
    private managerEmployeeRepository: Repository<ManagerEmployee>,
  ) {}

  createUserManager(createUserInput: CreateUserInput) {
    const userManager: User = {
      userId: v4(),
      createdAt: new Date(),
      email: createUserInput.email,
      name: createUserInput.name,
      phone: createUserInput.phone,
      roleIdFk: Roles.MANAGER,
      updatedAt: null,
    };
    return this.userRepository.save(userManager);
  }

  async createUserEmployee(createUserEmployeeInput: CreateUserEmployeeInput) {
    const manager = await this.userRepository.findOne({
      where: { userId: createUserEmployeeInput.managerUserId },
    });

    if (!manager) {
      throw Error('Manager not found');
    }

    const employee: User = {
      userId: v4(),
      name: createUserEmployeeInput.employeeUserInput.name,
      email: createUserEmployeeInput.employeeUserInput.email,
      createdAt: new Date(),
      updatedAt: null,
      roleIdFk: Roles.EMPLOYEE,
      phone: createUserEmployeeInput.employeeUserInput.phone,
      managerByEmployees: [],
    };

    const managerEmployee: ManagerEmployee = {
      managerEmployeeId: v4(),
      createdAt: new Date(),
      employeeIdFk: employee.userId,
      managerIdFk: createUserEmployeeInput.managerUserId,
    };

    await this.userRepository.manager.transaction(async () => {
      await this.userRepository.save(employee);

      await this.managerEmployeeRepository.save(managerEmployee);
    });

    employee.managerByEmployees.push(managerEmployee);

    return employee;
  }

  findAllLeadsByUser(userId: string) {
    return this.userRepository.find({
      where: { userId },
      relations: ['leads'],
    });
  }

  async findAllEmployeesByManager(managerUserId: string) {
    const result = await this.managerEmployeeRepository.find({
      where: {
        managerIdFk: managerUserId,
      },
    });
    if (!result || !result.length) throw Error('Leads not found');
    const arrayIds = [];
    result.forEach((ele) => {
      arrayIds.push(ele.employeeIdFk);
    });
    const query = {
      where: {
        userId: In(arrayIds),
      },
    };
    return this.userRepository.find(query);
  }

  async findManagerByEmployee(employeeUserId: string) {
    const found = await this.managerEmployeeRepository.findOne({
      where: {
        employeeIdFk: employeeUserId,
      },
    });
    if (!found) throw Error('Manager not found');
    const query = { where: { userId: found.managerIdFk } };
    return this.userRepository.findOne(query);
  }

  findOne(userId: string) {
    return this.userRepository.findOne({ where: { userId } });
  }
  findByEmail(email: string) {
    return this.userRepository.find({ where: { email } });
  }

  update(userId: string, updateUserInput: UpdateUserInput) {
    this.userRepository.update(userId, updateUserInput);
  }

  remove(userId: string) {
    return this.userRepository.delete(userId);
  }
}

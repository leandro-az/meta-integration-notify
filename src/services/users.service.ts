import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { In, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ManagerEmployee } from '../entities/manager-employee.entity';
import { v4 } from 'uuid';
import { Roles } from '../constants/roles.constant';
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
      roleId: Roles.MANAGER,
      updatedAt: null,
      icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.userRepository.save(userManager);
  }

  async createUserEmployee(
    managerUserId: string,
    createUserInput: CreateUserInput,
  ) {
    const manager = await this.userRepository.findOne({
      where: { userId: managerUserId },
    });

    if (!manager) {
      throw Error('Manager not found');
    }

    const employee: User = {
      userId: v4(),
      name: createUserInput.name,
      email: createUserInput.email,
      createdAt: new Date(),
      updatedAt: null,
      roleId: Roles.EMPLOYEE,
      phone: createUserInput.phone,
      managerByEmployees: [],
      icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };

    const managerEmployee: ManagerEmployee = {
      managerEmployeeId: v4(),
      createdAt: new Date(),
      employeeIdFk: employee.userId,
      managerIdFk: managerUserId,
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
    if (!result || !result.length) throw Error('Manager Does Not exists');
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
  async findByEmail(email: string) {
    const result = await this.userRepository.findOne({ where: { email } });
    // if (!result) throw new Error('User not found');
    return result;
  }

  async update(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new Error('User not found!');
    }
    const result = await this.userRepository.update(userId, updateUserInput);
    if (!result.affected) {
      throw new Error('User not updated!');
    }
    return user;
  }

  async remove(userId: string): Promise<boolean> {
    const result = await this.userRepository.delete(userId);
    return result.affected ? true : false;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ManagerEmployee } from '../entities/manager-employee.entity';
import { uuid } from 'uuidv4';
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
    return this.userRepository.save(createUserInput);
  }

  async createUserEmployee(
    managerUserId: string,
    employeeUserInput: CreateUserInput,
  ) {
    const queryRunner = this.userRepository.queryRunner;
    try {
      await queryRunner.startTransaction();
      const manager = await this.userRepository.findOne({
        where: { userId: managerUserId },
      });
      if (!manager) {
        throw Error('Manager not found');
      }

      const employee: User = {
        userId: uuid(),
        name: employeeUserInput.name,
        email: employeeUserInput.email,
        createdAt: new Date(),
        updatedAt: null,
        roleIdFk: Roles.EMPLOYEE,
      };
      await this.userRepository.save(employee);

      const managerEmployee: ManagerEmployee = {
        managerEmployeeId: uuid(),
        createdAt: new Date(),
        employeeIdFk: employee.userId,
        managerIdFk: managerUserId,
      };

      await this.managerEmployeeRepository.save(managerEmployee);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  findAllLeadsByUser(userId: string) {
    return this.userRepository.find({
      where: { userId },
      relations: ['leads'],
    });
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

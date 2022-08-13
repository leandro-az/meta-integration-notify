import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUserManager')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUserManager(createUserInput);
  }

  @Query('userByEmail')
  findOne(@Args('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Mutation('createUserEmployee')
  createUserEmployee(
    @Args('managerUserId')
    managerUserId: string,
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.createUserEmployee(managerUserId, createUserInput);
  }

  @Query('managerByEmployee')
  findManagerByEmployee(@Args('employeeUserId') employeeUserId: string) {
    return this.usersService.findManagerByEmployee(employeeUserId);
  }

  @Query('employeesByManager')
  findAllEmployeesByManager(@Args('managerUserId') managerUserId: string) {
    return this.usersService.findAllEmployeesByManager(managerUserId);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.userId, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('userId') userId: string) {
    return this.usersService.remove(userId);
  }
}

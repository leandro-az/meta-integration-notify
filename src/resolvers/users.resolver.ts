import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { Authorize } from 'src/interceptor/authorize.interceptor';
import { UseGuards } from '@nestjs/common';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUserManager')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    if (!createUserInput.email) {
      throw new Error('Email is required');
    }
    if (!createUserInput.phone) {
      throw new Error('Phone is required');
    }
    if (!createUserInput.name) {
      throw new Error('Name is required');
    }
    return this.usersService.createUserManager(createUserInput);
  }

  @UseGuards(Authorize)
  @Query('userByEmail')
  findOne(@Args('email') email: string) {
    if (!email) throw new Error('email not recive!');
    return this.usersService.findByEmail(email);
  }
  @UseGuards(Authorize)
  @Mutation('createUserEmployee')
  createUserEmployee(
    @Args('managerUserId')
    managerUserId: string,
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.createUserEmployee(managerUserId, createUserInput);
  }
  @UseGuards(Authorize)
  @Query('managerByEmployee')
  findManagerByEmployee(@Args('employeeUserId') employeeUserId: string) {
    return this.usersService.findManagerByEmployee(employeeUserId);
  }
  @UseGuards(Authorize)
  @Query('employeesByManager')
  findAllEmployeesByManager(@Args('managerUserId') managerUserId: string) {
    return this.usersService.findAllEmployeesByManager(managerUserId);
  }
  @UseGuards(Authorize)
  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.userId, updateUserInput);
  }
  @UseGuards(Authorize)
  @Mutation('removeUserManager')
  removeUserManager(@Args('userId') userId: string) {
    return this.usersService.remove(userId);
  }
  @UseGuards(Authorize)
  @Mutation('removeUserEmployee')
  removeUserEmployee(@Args('userId') userId: string) {
    return this.usersService.remove(userId);
  }
}

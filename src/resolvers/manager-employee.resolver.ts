import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ManagerEmployeeService } from '../services/manager-employee.service';
import { CreateUserEmployeeInput } from '../dto/create-user-employee.input';
import { UpdateManagerEmployeeInput } from '../dto/update-user-employee.input';

@Resolver('ManagerEmployee')
export class ManagerEmployeeResolver {
  constructor(
    private readonly managerEmployeeService: ManagerEmployeeService,
  ) {}

  // @Mutation('createUserEmployee')
  // create(
  //   @Args('createUserEmployeeInput')
  //   createUserEmployeeInput: CreateUserEmployeeInput,
  // ) {
  //   return this.managerEmployeeService.create(createUserEmployeeInput);
  // }

  // @Query('managerByEmployee')
  // findAll(@Args('employeeUserId') employeeUserId: string) {
  //   return this.managerEmployeeService.findManagerByEmployee(employeeUserId);
  // }

  // @Query('employeesByManager')
  // findOne(@Args('managerUserId') managerUserId: string) {
  //   return this.managerEmployeeService.findAllEmployeesByManager(managerUserId);
  // }

  // @Mutation('updateManagerEmployee')
  // update(
  //   @Args('updateManagerEmployeeInput')
  //   updateManagerEmployeeInput: UpdateManagerEmployeeInput,
  // ) {
  //   return this.managerEmployeeService.update(
  //     updateManagerEmployeeInput.id,
  //     updateManagerEmployeeInput,
  //   );
  // }

  // @Mutation('removeManagerEmployee')
  // remove(@Args('id') id: number) {
  //   return this.managerEmployeeService.remove(id);
  // }
}

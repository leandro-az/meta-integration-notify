import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ManagerEmployeeService } from '../services/manager-employee.service';
import { CreateManagerEmployeeInput } from '../dto/create-manager-employee.input';
import { UpdateManagerEmployeeInput } from '../dto/update-manager-employee.input';

@Resolver('ManagerEmployee')
export class ManagerEmployeeResolver {
  constructor(
    private readonly managerEmployeeService: ManagerEmployeeService,
  ) {}

  @Mutation('createManagerEmployee')
  create(
    @Args('createManagerEmployeeInput')
    createManagerEmployeeInput: CreateManagerEmployeeInput,
  ) {
    return this.managerEmployeeService.create(createManagerEmployeeInput);
  }

  @Query('managerEmployee')
  findAll() {
    return this.managerEmployeeService.findAll();
  }

  @Query('managerEmployee')
  findOne(@Args('id') id: number) {
    return this.managerEmployeeService.findOne(id);
  }

  @Mutation('updateManagerEmployee')
  update(
    @Args('updateManagerEmployeeInput')
    updateManagerEmployeeInput: UpdateManagerEmployeeInput,
  ) {
    return this.managerEmployeeService.update(
      updateManagerEmployeeInput.id,
      updateManagerEmployeeInput,
    );
  }

  @Mutation('removeManagerEmployee')
  remove(@Args('id') id: number) {
    return this.managerEmployeeService.remove(id);
  }
}

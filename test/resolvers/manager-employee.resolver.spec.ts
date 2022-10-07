import { Test, TestingModule } from '@nestjs/testing';
import { ManagerEmployeeResolver } from '../../src/resolvers/manager-employee.resolver';
import { ManagerEmployeeService } from '../../src/services/manager-employee.service';

describe('ManagerEmployeeResolver', () => {
  let resolver: ManagerEmployeeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerEmployeeResolver, ManagerEmployeeService],
    }).compile();

    resolver = module.get<ManagerEmployeeResolver>(ManagerEmployeeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

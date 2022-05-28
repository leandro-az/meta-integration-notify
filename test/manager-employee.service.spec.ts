import { Test, TestingModule } from '@nestjs/testing';
import { ManagerEmployeeService } from '../src/services/manager-employee.service';

describe('ManagerEmployeeService', () => {
  let service: ManagerEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerEmployeeService],
    }).compile();

    service = module.get<ManagerEmployeeService>(ManagerEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UsersIntegrationsService } from '../src/services/users-integrations.service';

describe('UsersIntegrationsService', () => {
  let service: UsersIntegrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersIntegrationsService],
    }).compile();

    service = module.get<UsersIntegrationsService>(UsersIntegrationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

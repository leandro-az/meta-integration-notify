import { Test, TestingModule } from '@nestjs/testing';
import { UsersIntegrationsResolver } from '../src/resolvers/users-integrations.resolver';
import { UsersIntegrationsService } from '../src/services/users-integrations.service';

describe('UsersIntegrationsResolver', () => {
  let resolver: UsersIntegrationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersIntegrationsResolver, UsersIntegrationsService],
    }).compile();

    resolver = module.get<UsersIntegrationsResolver>(UsersIntegrationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

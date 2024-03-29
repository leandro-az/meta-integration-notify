import { Test, TestingModule } from '@nestjs/testing';
import { RolesResolver } from '../../src/resolvers/roles.resolver';
import { RolesService } from '../../src/services/roles.service';

describe('RolesResolver', () => {
  let resolver: RolesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesResolver, RolesService],
    }).compile();

    resolver = module.get<RolesResolver>(RolesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

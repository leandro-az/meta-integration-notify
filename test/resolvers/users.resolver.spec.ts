import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from '../../src/resolvers/users.resolver';
import { UsersService } from '../../src/services/users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

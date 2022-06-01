import { Test, TestingModule } from '@nestjs/testing';
import { LeadsResolver } from '../../src/resolvers/leads.resolver';
import { LeadsService } from '../../src/services/leads.service';

describe('LeadsResolver', () => {
  let resolver: LeadsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadsResolver, LeadsService],
    }).compile();

    resolver = module.get<LeadsResolver>(LeadsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

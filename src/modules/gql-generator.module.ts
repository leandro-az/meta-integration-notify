import { Module } from '@nestjs/common';
import { GraphqlGeneratorService } from '../services/gql-generator.service';

@Module({
  providers: [GraphqlGeneratorService],
})
export class GraphqlGeneratorModule {}

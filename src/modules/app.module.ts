import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './users.module';
import { LeadsModule } from './leads.module';
import { RolesModule } from './roles.module';
import { UsersIntegrationsModule } from './users-integrations.module';
import { ManagerEmployeeModule } from './manager-employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphqlGeneratorModule } from './gql-generator.module';
import { databaseProviders } from '../configurations/data-source.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseProviders),
    UsersModule,
    LeadsModule,
    RolesModule,
    UsersIntegrationsModule,
    ManagerEmployeeModule,
    GraphqlGeneratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

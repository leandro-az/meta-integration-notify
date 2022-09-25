import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { LeadsModule } from './leads.module';
import { RolesModule } from './roles.module';
import { UsersIntegrationsModule } from './users-integrations.module';
import { ManagerEmployeeModule } from './manager-employee.module';
import { GqlModule } from './graphql.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from '../controller/healthCheck';
import { AuthorizeModule } from './authorize.module';

@Module({
  imports: [
    UsersModule,
    LeadsModule,
    RolesModule,
    UsersIntegrationsModule,
    ManagerEmployeeModule,
    GqlModule,
    TerminusModule,
    AuthorizeModule,
  ],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}

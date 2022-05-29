import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './users.module';
import { LeadsModule } from './leads.module';
import { RolesModule } from './roles.module';
import { UsersIntegrationsModule } from './users-integrations.module';
import { ManagerEmployeeModule } from './manager-employee.module';
import { GqlModule } from './graphql.module';

@Module({
  imports: [
    UsersModule,
    LeadsModule,
    RolesModule,
    UsersIntegrationsModule,
    ManagerEmployeeModule,
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

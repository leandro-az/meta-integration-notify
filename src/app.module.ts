import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { LeadsModule } from './modules/leads.module';
import { RolesModule } from './modules/roles.module';
import { UsersIntegrationsModule } from './modules/users-integrations.module';
import { ManagerEmployeeModule } from './modules/manager-employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    UsersModule,
    LeadsModule,
    RolesModule,
    UsersIntegrationsModule,
    ManagerEmployeeModule, // Don't worry, we will create this next
  ], //
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

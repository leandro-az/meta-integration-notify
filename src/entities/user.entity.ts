import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';
import { Lead } from './lead.entity';
import { UsersIntegration } from './users-integration.entity';
import { ManagerEmployee } from './manager-employee.entity';

@Index('email', ['email'], { unique: true })
@Index('role_id_fk', ['roleIdFk'], {})
@Entity('users', { schema: 'min_db' })
export class User {
  @Column('varchar', { primary: true, name: 'user_id', length: 38 })
  userId: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'role_id_fk', nullable: true })
  roleIdFk: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Role, (roles) => roles.users, {
    onDelete: 'SET NULL',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'role_id_fk', referencedColumnName: 'roleId' }])
  roleIdFk2?: Role;

  @OneToMany(() => Lead, (leads) => leads.userIdFk2)
  leads?: Lead[];

  @OneToMany(
    () => UsersIntegration,
    (usersIntegration) => usersIntegration.userIdFk2,
  )
  usersIntegration?: UsersIntegration[];

  @OneToMany(
    () => ManagerEmployee,
    (managerEmployee) => managerEmployee.managerUser,
    { eager: false },
  )
  employeesByManager?: ManagerEmployee[];

  @OneToMany(
    () => ManagerEmployee,
    (managerEmployee) => managerEmployee.employeeUser,
    { eager: false },
  )
  managerByEmployees?: ManagerEmployee[];
}

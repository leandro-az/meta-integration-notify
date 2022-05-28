import { Column, Entity, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('roles', { schema: 'min_db' })
export class Role {
  @Column('varchar', { primary: true, name: 'role_id', length: 38 })
  roleId: string;

  @Column('varchar', { name: 'role_name', nullable: true, length: 255 })
  roleName: string | null;

  @Column('tinyint', { name: 'can_add_employee', nullable: true, width: 1 })
  canAddEmployee: boolean | null;

  @Column('tinyint', { name: 'can_create_lead', nullable: true, width: 1 })
  canCreateLead: boolean | null;

  @Column('tinyint', { name: 'can_edit_lead', nullable: true, width: 1 })
  canEditLead: boolean | null;

  @Column('tinyint', { name: 'can_delete_lead', nullable: true, width: 1 })
  canDeleteLead: boolean | null;

  @Column('tinyint', { name: 'can_vinculate_lead', nullable: true, width: 1 })
  canVinculateLead: boolean | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => User, (users) => users.roleIdFk2, { eager: false })
  users: User[];
}

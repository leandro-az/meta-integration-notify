import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Index('manager_id_fk', ['managerIdFk'], {})
@Index('employee_id_fk', ['employeeIdFk'], {})
@Entity('manager_employee', { schema: 'min_db' })
export class ManagerEmployee {
  @Column('varchar', { primary: true, name: 'manager_employee_id', length: 38 })
  managerEmployeeId: string;

  @Column('varchar', { name: 'manager_id_fk', length: 38 })
  managerIdFk: string;

  @Column('varchar', { name: 'employee_id_fk', length: 38 })
  employeeIdFk: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt?: Date | null;

  @ManyToOne(() => User, (users) => users.employeesByManager, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'manager_id_fk', referencedColumnName: 'userId' }])
  managerUser?: User;

  @ManyToOne(() => User, (users) => users.managerByEmployees, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'employee_id_fk', referencedColumnName: 'userId' }])
  employeeUser?: User;
}

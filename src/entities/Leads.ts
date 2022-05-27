import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Index('email', ['email'], { unique: true })
@Index('phone', ['phone'], { unique: true })
@Index('user_id_fk', ['userIdFk'], {})
@Entity('leads', { schema: 'min_db' })
export class Leads {
  @Column('varchar', { primary: true, name: 'lead_id', length: 38 })
  leadId: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    unique: true,
    length: 255,
  })
  phone: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'age', nullable: true })
  age: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'user_id_fk', length: 38 })
  userIdFk: string;

  @ManyToOne(() => Users, (users) => users.leads, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id_fk', referencedColumnName: 'userId' }])
  userIdFk2: Users;
}

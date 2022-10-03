import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Index('email', ['email'], { unique: true })
@Index('phone', ['phone'], { unique: true })
@Index('user_id_fk', ['userIdFk'], {})
@Entity('leads', { schema: 'min_db' })
export class Lead {
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

  @Column('double', { name: 'valor_total_plano', nullable: true })
  valor_total_plano: number | null;

  @Column('varchar', { name: 'status', nullable: false, length: 30 })
  status: string;

  @Column('varchar', { name: 'obs', nullable: true, length: 1024 })
  obs: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'user_id_fk', length: 38 })
  userIdFk: string;

  @ManyToOne(() => User, (users) => users.leads, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: false,
  })
  @JoinColumn([{ name: 'user_id_fk', referencedColumnName: 'userId' }])
  userIdFk2?: User;

  @Column('varchar', { name: 'icon', nullable: false, length: 30 })
  icon!: string;
}

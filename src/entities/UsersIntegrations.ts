import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';

@Index('integration_url', ['integrationUrl'], { unique: true })
@Index('integration_token', ['integrationToken'], { unique: true })
@Index('user_id_fk', ['userIdFk'], {})
@Entity('users_integrations', { schema: 'min_db' })
export class UsersIntegrations {
  @Column('varchar', { primary: true, name: 'user_integration_id', length: 38 })
  userIntegrationId: string;

  @Column('varchar', {
    name: 'integration_url',
    nullable: true,
    unique: true,
    length: 500,
  })
  integrationUrl: string | null;

  @Column('varchar', {
    name: 'integration_token',
    nullable: true,
    unique: true,
    length: 50,
  })
  integrationToken: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'user_id_fk', length: 38 })
  userIdFk: string;

  @ManyToOne(() => Users, (users) => users.usersIntegrations, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id_fk', referencedColumnName: 'userId' }])
  userIdFk2: Users;
}

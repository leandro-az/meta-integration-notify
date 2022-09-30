import { Injectable, Inject } from '@nestjs/common';
import { UpdateUsersIntegrationInput } from '../dto/update-users-integration.input';
import { UsersIntegration } from '../entities/users-integration.entity';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class UsersIntegrationsService {
  constructor(
    @Inject('USER_INTEGRATION_REPOSITORY')
    private userIntegrationRepository: Repository<UsersIntegration>,
  ) {}
  async create(managerUserId: string) {
    const found = await this.userIntegrationRepository.findOne({
      where: { userIdFk: managerUserId },
    });
    if (found) return found;
    const uuidV4 = v4();
    const idTable = v4();
    const usersIntegrationToInsert: UsersIntegration = {
      createdAt: new Date(),
      integrationUrl: `${process.env.APP_URL}/${uuidV4}`,
      integrationToken: uuidV4,
      updatedAt: null,
      userIdFk: managerUserId,
      userIntegrationId: idTable,
    };
    return this.userIntegrationRepository.save(usersIntegrationToInsert);
  }

  findAll() {
    return `This action returns all usersIntegrations`;
  }

  findOne(managerUserId: string) {
    return this.userIntegrationRepository.findOne({
      where: { userIdFk: managerUserId },
    });
  }

  update(id: number, updateUsersIntegrationInput: UpdateUsersIntegrationInput) {
    return `This action updates a #${id} usersIntegration`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersIntegration`;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { CreateLeadInput } from '../dto/create-lead.input';
import { UpdateLeadInput } from '../dto/update-lead.input';
import { Repository } from 'typeorm';
import { Lead } from '../entities/lead.entity';
import { v4 } from 'uuid';
import { LeadStatus } from '../constants/lead-status.constant';
import { UsersIntegration } from '../entities/users-integration.entity';
@Injectable()
export class LeadsService {
  constructor(
    @Inject('LEAD_REPOSITORY')
    private leadRepository: Repository<Lead>,
    @Inject('USER_INTEGRATION_REPOSITORY')
    private userIntegrationRepository: Repository<UsersIntegration>,
  ) {}

  create(createLeadInput: CreateLeadInput, userRelated: string) {
    const leadToSave: Lead = {
      age: createLeadInput.age,
      createdAt: new Date(),
      email: createLeadInput.email,
      leadId: v4(),
      name: createLeadInput.name,
      phone: createLeadInput.phone,
      obs: createLeadInput.obs,
      status: LeadStatus.NOVO,
      valor_total_plano: 0,
      userIdFk: userRelated,
      updatedAt: null,
    };
    return this.leadRepository.save(leadToSave);
  }

  async recive(createLeadInput: CreateLeadInput, userIntegrationId: string) {
    const userIntegrationIdFound = await this.userIntegrationRepository.findOne(
      {
        where: { userIntegrationId },
      },
    );
    // Talvez tenha que bater no Facebook Para recuperar os dados do Form
    if (!userIntegrationIdFound) throw new Error('Integration not found!');
    const leadToSave: Lead = {
      age: createLeadInput.age,
      createdAt: new Date(),
      email: createLeadInput.email,
      leadId: v4(),
      name: createLeadInput.name,
      phone: createLeadInput.phone,
      obs: createLeadInput.obs,
      status: LeadStatus.NOVO,
      valor_total_plano: 0,
      userIdFk: userIntegrationIdFound.userIdFk,
      updatedAt: null,
    };
    return this.leadRepository.save(leadToSave);
  }

  findAll() {
    return `This action returns all leads`;
  }

  async findOne(leadId: string) {
    return this.leadRepository.findOne({ where: { leadId } });
  }

  async findLeadsByUser(userId: string) {
    return this.leadRepository.find({
      where: {
        userIdFk: userId,
      },
    });
  }

  async update(updateLeadInput: UpdateLeadInput) {
    const leadToUpdate: Lead = await this.findOne(updateLeadInput.leadId);
    leadToUpdate.age = updateLeadInput.age;
    leadToUpdate.email = updateLeadInput.email;
    leadToUpdate.name = updateLeadInput.name;
    leadToUpdate.obs = updateLeadInput.obs;
    leadToUpdate.phone = updateLeadInput.phone;
    leadToUpdate.status = LeadStatus[updateLeadInput.status];
    leadToUpdate.valor_total_plano = updateLeadInput.valor_total_plano;
    leadToUpdate.updatedAt = new Date();
    return this.leadRepository.save(leadToUpdate);
  }

  remove(leadId: string) {
    this.leadRepository.delete(leadId);
    return true;
  }
}

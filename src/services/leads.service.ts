import { Injectable, Inject } from '@nestjs/common';
import { CreateLeadInput } from '../dto/create-lead.input';
import { UpdateLeadInput } from '../dto/update-lead.input';
import { Repository } from 'typeorm';
import { Lead } from '../entities/lead.entity';
import { v4 } from 'uuid';
import { LeadStatus } from '../constants/lead-status.constant';
import { UsersIntegration } from '../entities/users-integration.entity';
import { newLeadNotify } from '../utils/nodemailer';
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
      icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    return this.leadRepository.save(leadToSave);
  }

  async recive(createLeadInput: CreateLeadInput, userIntegrationId: string) {
    const userIntegrationIdFound = await this.userIntegrationRepository.findOne(
      {
        where: { integrationToken: userIntegrationId },
        relations: ['userIdFk2'],
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
      icon: `svg-${Math.floor(Math.random() * 15) + 1}`,
    };
    const result = await this.leadRepository.save(leadToSave);
    await newLeadNotify(
      leadToSave.email,
      leadToSave.name,
      leadToSave.phone,
      userIntegrationIdFound.userIdFk2?.email,
    );
    return result;
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
      relations: ['userIdFk2'],
    });
    // return { ...result, user: result[0].userIdFk2 };
  }

  async update(updateLeadInput: UpdateLeadInput, userRelated: string) {
    const leadToUpdate: Lead = await this.findOne(updateLeadInput.leadId);
    leadToUpdate.age = updateLeadInput.age
      ? updateLeadInput.age
      : leadToUpdate.age;
    leadToUpdate.email = updateLeadInput.email
      ? updateLeadInput.email
      : leadToUpdate.email;
    leadToUpdate.name = updateLeadInput.name
      ? updateLeadInput.name
      : leadToUpdate.name;
    leadToUpdate.obs = updateLeadInput.obs
      ? updateLeadInput.obs
      : leadToUpdate.obs;
    leadToUpdate.phone = updateLeadInput.phone
      ? updateLeadInput.phone
      : leadToUpdate.phone;
    leadToUpdate.status = LeadStatus[updateLeadInput.status];
    leadToUpdate.valor_total_plano = updateLeadInput.valor_total_plano;
    leadToUpdate.updatedAt = new Date();
    leadToUpdate.userIdFk = userRelated;
    return this.leadRepository.save(leadToUpdate);
  }

  async remove(leadId: string): Promise<boolean> {
    const result = await this.leadRepository.delete(leadId);
    return result.affected ? true : false;
  }
}

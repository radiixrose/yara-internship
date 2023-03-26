import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findById(id: number): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  async create(client: Partial<Client>): Promise<Client> {
    const newClient = this.clientRepository.create(client);
    return this.clientRepository.save(newClient);
  }

  async update(client: Partial<Client>): Promise<Client> {
    const updatedClient = await this.clientRepository.preload(client);
    if (!updatedClient) {
      throw new Error(`Client with id ${client.id} not found`);
    }
    return this.clientRepository.save(updatedClient);
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.clientRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Client with id ${id} not found`);
    }
  }
}
